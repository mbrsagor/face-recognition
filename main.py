from fastapi import FastAPI, status, HTTPException
from pydantic import BaseModel

from database import SessionLocal
from typing import List

import models

app = FastAPI()


class Item(BaseModel):  # Serializer
    id: int
    name: str
    price: int
    on_offer: bool
    description: str


db = SessionLocal()


@app.get('/items/', response_model=List[Item], status_code=status.HTTP_200_OK)
def get_all_items(item: Item):
    items = db.query(models.Item).all()
    return items
