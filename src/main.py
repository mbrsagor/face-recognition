from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from redis_om import get_redis_connection, HashModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_methods=['*'],
    allow_headers=['*'],
)

redis = get_redis_connection(
    host='redis-12277.c257.us-east-1-3.ec2.cloud.redislabs.com',
    port=12277,
    password='7tbDgQLyCAjIzSwzDkyIDakSr2PmUqna',
    decode_responses=True
)


class Product(HashModel):
    name: str
    price: float
    quantity = int

    class Meta:
        database = redis


@app.get('/')
async def root():
    about_me = [
        {"name": "Md.Bozlur Rosid Sagor", "nick_name": "Mbr Sagor", "work_at": "Circle Fintech Ltd.",
         "position": "Software Engineer"}
    ]
    return about_me


@app.get('/products/')
def products():
    return Product.all_pks()


@app.post('/create-product/')
def create_product(product: Product):
    return product.save()
