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
    new_item = models.Item(
        name=item.name,
        price=item.price,
        on_offer=item.on_offer,
        description=item.description
    )

    old_item = db.query(models.Item).filter(item.name == item.name)
    if old_item is not None:
        resp = {
            'status': False,
            'message': 'The item have already exist.'
        }
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=resp)

    db.add(new_item)
    db.commit()
    resp = {
        'status': True,
        'message': 'Item created successfully done.'
    }
    return resp
