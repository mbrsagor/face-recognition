from pydantic import BaseSettings


class Settings(BaseSettings):
    # Redis database configuration
    host = 'db_host_name',
    password = 'db_password_name',
    port = 12277,
    decode_responses = True
