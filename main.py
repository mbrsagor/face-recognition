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


@app.get('/items/', response_model=List[Item], status_code=status.HTTP_200_OK)
def get_all_items():
    items = db.query(models.Item).all()
    return items


@app.post('/create-item/', response_model=Item, status_code=status.HTTP_201_CREATED)
def create_an_item(item: Item):
    old_item = db.query(models.Item).filter(models.Item.name == item.name).first()
    if old_item is not None:
        resp = {
            "status": False,
            "message": "The item have already exists."
        }
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=resp)

    new_item = models.Item(
        name=item.name,
        price=item.price,
        on_offer=item.on_offer,
        description=item.description,
    )

    db.add(new_item)
    db.commit()
    return new_item


@app.get('/item/{id}/', response_model=Item, status_code=status.HTTP_200_OK)
def get_an_item(id: int):
    item = db.query(models.Item).filter(models.Item.id == id).first()
    return item


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
