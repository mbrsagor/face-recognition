import uuid

from database.database import BASE
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import Column, String, Integer, Boolean, Text, ForeignKey


class Category(BASE):
    __tablename__ = 'categories'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)

    def __repr__(self):
        return self.name


class Post(BASE):
    __tablename__ = 'posts'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String, index=True)
    content = Column(Text)
    is_publish = Column(Boolean, default=True)
    author_id = Column(Integer, ForeignKey('users.id'))
    author = relationship('User', back_populates='posts')

    def __repr__(self):
        return self.title
