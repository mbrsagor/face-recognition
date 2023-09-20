from pydantic import BaseModel


class CategorySerializer(BaseModel):
    id: int
    name: str
