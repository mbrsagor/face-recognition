from database import BASE, engine

print("Creating Database")

BASE.metadata.create_all(engine)
