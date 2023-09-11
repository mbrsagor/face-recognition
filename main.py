from fastapi import FastAPI, status, HTTPException
from pydantic import BaseModel

from database import SessionLocal
from typing import List

import models

app = FastAPI()
db = SessionLocal()


class Item(BaseModel):  # Serializer
    id: int
    name: str
    price: int
    on_offer: bool
    description: str


class Blog(BaseModel):
    id: int
    title: str
    is_publish: bool
    content: str


@app.get('/posts/', response_model=List[Blog], status_code=status.HTTP_200_OK)
def blog_posts():
    posts = db.query(models.Blog).all()
    return posts


@app.post('/create-post/', response_model=Blog, status_code=status.HTTP_201_CREATED)
def create_blog_post(blog: Blog):
    new_post = models.Blog(
        title=blog.title,
        is_publish=blog.is_publish,
        content=blog.content
    )

    db.add(new_post)
    db.commit()
    return new_post


@app.get('/post/{id}/', response_model=Blog, status_code=status.HTTP_200_OK)
def get_single_post(id: int):
    post = db.query(models.Blog).filter(models.Blog.id == id).first()
    return post


@app.put('/update-item/{id}', response_model=Item, status_code=status.HTTP_200_OK)
def item_update(id: int, item: Item):
    get_item = db.query(models.Item).filter(models.Item.id == id).first()
    if get_item is not None:
        get_item.name = item.name
        get_item.price = item.price
        get_item.on_offer = item.on_offer
        get_item.description = item.description
        db.commit()
        return get_item
    else:
        resp = {
            "status": False,
            "message": "No item found this ID"
        }
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=resp)


@app.delete('/item-delete/{id}/')
def item_delete(id: int):
    item = db.query(models.Item).filter(models.Item.id == id).first()
    db.delete(item)
    db.commit()
    resp = {
        "status": True,
        "message": "The item is deleted successfully."
    }
    return resp
