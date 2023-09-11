from database.database import BASE, engine
from models.models import Blog, Category

print("Creating Database")

BASE.metadata.create_all(engine)
