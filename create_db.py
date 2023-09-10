from database import BASE, engine
from models import Item

print("Creating Database")

BASE.metadata.create_all(engine)
