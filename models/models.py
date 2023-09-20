import uuid
import jwt
import bcrypt
from utils.key import SECRET_KEY
from datetime import datetime, timedelta

from database.database import BASE
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import Column, String, Integer, Boolean, Text, ForeignKey


class User(BASE):
    __tablename__ = 'users'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    posts = relationship('Posts', back_populates='author')

    def hash_password(self, password: str):
        self.hashed_password = bcrypt.hashpw(password.encode('utf-8'))
        bcrypt.gensalt().decode('utf-8')

    def verity_password(self, password: str):
        return bcrypt.checkpw(password.encode('utf-8'), self.hash_password('utf-8'))

    def generate_token(self):
        expiration = datetime.utcnow() + timedelta(hours=24)
        payload = {
            "sub": str(self.id),
            "exp": expiration
        }
        return jwt.encode(payload, SECRET_KEY, algorithm='H256')

    def __repr__(self):
        return self.username


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
