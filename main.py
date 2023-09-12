from fastapi import FastAPI, status, HTTPException, Response
from typing import List

from models import models
from database.database import SessionLocal
from utils.messages import CATEGORY, CATEGORY_UPDATE_ERROR_MSG
from utils.response import data_deleted, id_not_found
from serializers.serializers import BlogSerializer, CategorySerializer

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


@app.get('/api/posts/', response_model=List[BlogSerializer], status_code=status.HTTP_200_OK)
async def blog_posts():
    """
    Name: Category list API
    URL: /api/posts/
    Method: GET
    :return:
    """
    posts = db.query(models.Blog).all()
    return posts


@app.post('/api/create-post/', response_model=BlogSerializer, status_code=status.HTTP_201_CREATED)
async def create_blog_post(blog: BlogSerializer):
    """
    Name: Blog post create API
    URL: /api/create-post
    Method: POST
    :param blog:
    :return:
    """
    new_post = models.Blog(
        title=blog.title,
        is_publish=blog.is_publish,
        content=blog.content
    )

    db.add(new_post)
    db.commit()
    return new_post


@app.get('/api/post/{id}/', response_model=BlogSerializer, status_code=status.HTTP_200_OK)
async def get_single_post(id: int):
    """
    Name: Blog post details or single API
    URL: /api/post/id/
    Method: GET
    :param id:
    :return:
    """
    post = db.query(models.Blog).filter(models.Blog.id == id).first()
    return post


@app.put('/api/update-post/{id}/', response_model=BlogSerializer, status_code=status.HTTP_200_OK)
async def update_post(id: int, serializer: BlogSerializer):
    """
    Name: Blog post update API
    URL: /api/update-post/id/
    Method: PUT
    :param id:
    :param serializer:
    :return:
    """
    get_post = db.query(models.Blog).filter(models.Blog.id == id).first()
    try:
        if get_post is not None:
            get_post.title = serializer.title,
            get_post.is_publish = serializer.is_publish,
            get_post.content = serializer.content
            db.commit()
            return get_post
    except Exception as ex:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(ex))


@app.delete('/post-delete/{id}/')
async def post_delete(id: int):
    """
    Name: Blog post delete API.
    URL: /api/post-delete/id/
    Method: DELETE
    :param id:
    :return:
    """
    post = db.query(models.Blog).filter(models.Blog.id == id).first()
    if post is not None:
        db.delete(post)
        db.commit()
        return data_deleted()
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=id_not_found)
