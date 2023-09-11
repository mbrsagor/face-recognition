from pydantic import BaseModel


class BlogSerializer(BaseModel):
    id: int
    title: str
    is_publish: bool
    content: str
