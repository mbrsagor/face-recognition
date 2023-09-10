from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()


class Item(BaseModel):  # Serializer
    id: int
    name: str
    price: int
    on_offer: bool
    description: str


@app.get('/user/{name}')
def call_name(name: str):
    return {'message': f"Hello Mr. {name}"}


@app.put('/item/{item_id}/')
def update_item(item_id: int, item: Item):
    return {
        'name': item.name,
        'price': item.price,
        'on_offer': item.on_offer,
        'description': item.description
    }
