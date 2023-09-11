from database import BASE
from sqlalchemy import Column, String, Integer, Boolean, Text


class Blog(BASE):
    __tablename__ = 'blogs'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(100), nullable=False)
    is_publish = Column(Boolean, default=True)
    content = Column(Text)

    def __repr__(self):
        return self.title
