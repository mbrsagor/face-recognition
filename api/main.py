from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()
fake_data = []


class Product(BaseModel):
    id: int
    name: str
    price: float
    is_active: Optional[bool] = None


@app.get("/")
def home():
    about_me = [
        {"name": "Md.Bozlur Rosid Sagor"},
        {"nick_name": "Mbr Sagor"},
        {"work_at": "Circle Fintech Ltd."},
        {"position": "Software Engineer"}
    ]
    return about_me


@app.get("/product")
def products():
    return fake_data


@app.get("/product/{product_id}")
def product_details(product_id: int):
    product = product_id - 1
    return fake_data[product]


@app.post("/create_product")
def add_new_product(product: Product):
    fake_data.append(product.dict())
    # Return the last object when `product` will create
    return fake_data[-1]


@app.delete("/delete_product/{product_id}")
def delete_product(product_id: int):
    fake_data.pop(product_id-1)
    return {"success": "The product deleted successfully"}
