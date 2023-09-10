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

    class Config:
        orm_mode = True


@app.get('/items/')
def get_items():
    pass


@app.get('/item/{id}/')
def get_item(id: int):
    pass


@app.post('/create-item/')
def create_item():
    pass


@app.put('/update-item/{id}')
def update_item(id: int):
    pass


@app.delete('/delete-item/{id}')
def delete_item(id: int):
    pass
