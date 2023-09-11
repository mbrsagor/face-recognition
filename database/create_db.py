from database import BASE, engine
from models.models import Blog

print("Creating Database")

BASE.metadata.create_all(engine)
