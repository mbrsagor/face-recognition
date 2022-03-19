from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder

from src.models import Product

app = FastAPI()

# Middleware to request transfer frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/')
async def root():
    about_me = [
        {"name": "Md.Bozlur Rosid Sagor", "email": "brshagor.cse@gmial.com", "work_at": "Circle Fintech Ltd.",
         "position": "Software Engineer", "whats_app": "+8801748880505"}
    ]
    return about_me


@app.get('/products/')
def products():
    return [format(pk) for pk in Product.all_pks()]


def format(pk: str):
    product = Product.get(pk)
    return {
        'id': product.pk,
        'name': product.name,
        'price': product.price,
        'quantity': product.quantity
    }


@app.post('/create-product/')
def create_product(product: Product):
    return product.save()


@app.get('/product/{pk}/')
def product_details(pk: str):
    try:
        return Product.get(pk)
    except Exception as e:
        return str(f"The product ID not found{e}")


@app.put("/product/{pk}", response_model=Product)
async def update_product(pk: str, product: Product):
    update_item = jsonable_encoder(product)
    product[pk] = update_item
    return update_item


@app.delete('/product/{pk}/')
def delete_product(pk: str):
    return Product.delete(pk)
