from database import BASE
from sqlalchemy import Column, String, Integer, Boolean, Text


class Item(BASE):
    __tablename__ = 'items'
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False, unique=True)
    price = Column(Integer, nullable=False)
    description = Column(Text)
    on_offer = Column(Boolean, default=False)

    def __repr__(self):
        return self.name
