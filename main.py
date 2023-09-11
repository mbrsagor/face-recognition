from fastapi import FastAPI, status, HTTPException
from pydantic import BaseModel

from database import SessionLocal
from typing import List

import models

app = FastAPI()
db = SessionLocal()


class Blog(BaseModel):  # Serializer
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


@app.put('/update-post/{id}', response_model=Blog, status_code=status.HTTP_200_OK)
def update_post(id: int, blog: Blog):
    get_post = db.query(models.Blog).filter(models.Blog.id == id).first()
    if get_post is not None:
        get_post.title = blog.title,
        get_post.is_publish = blog.is_publish,
        get_post.content = blog.content
        db.commit()
        return get_post
    else:
        resp = {'status': False, 'message': 'No post found this ID'}
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=resp)


@app.delete('/post-delete/{id}/')
def post_delete(id: int):
    post = db.query(models.Blog).filter(models.Blog.id == id).first()
    db.delete(post)
    db.commit()
    resp = {
        "status": True,
        "message": "The post is deleted successfully."
    }
    return resp
