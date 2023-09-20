from fastapi import FastAPI, status, HTTPException
from typing import List

from models import models
from database.database import SessionLocal
from utils.messages import CATEGORY, CATEGORY_UPDATE_ERROR_MSG
from utils.response import data_deleted, id_not_found
from serializers.serializers import CategorySerializer

app = FastAPI()
db = SessionLocal()


@app.get('/api/categories/', response_model=List[CategorySerializer], status_code=status.HTTP_200_OK)
async def category_list():
    """
    Name: Category listview API
    URL: /api/categories
    Method: GET
    :return:
    """
    categories = db.query(models.Category).all()
    if not categories:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=CATEGORY)
    else:
        return categories


@app.post('/api/create-category/', response_model=CategorySerializer, status_code=status.HTTP_201_CREATED)
async def create_category(serializer: CategorySerializer):
    """
    Name: create new category API
    URL: /api/create-category/
    Method: POST
    :param serializer:
    :return:
    """
    category = models.Category(
        name=serializer.name
    )
    db.add(category)
    db.commit()
    return category


@app.put('api//category-update/{id}/', response_model=CategorySerializer, status_code=status.HTTP_200_OK)
async def category_update(id: int, serializer: CategorySerializer):
    """
    Name: category update API
    URL: /api/category-update/id/
    Method: GET
    :param id:
    :param serializer:
    :return:
    """
    category = db.query(models.Category).filter(models.Category.id == id).first()
    if category is not None:
        category.name = serializer.name
        db.commit()
        return category
    else:
        raise CATEGORY_UPDATE_ERROR_MSG


@app.delete('/api/delete-category/{id}/')
async def delete_category(id: int):
    """
    Name: Category delete API
    URL: /api/delete-category/id/
    Method: DELETE
    :param id:
    :return:
    """
    category = db.query(models.Category).filter(models.Category.id == id).first()
    if category is not None:
        db.delete(category)
        db.commit()
        return data_deleted()
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=id_not_found)
