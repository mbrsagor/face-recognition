from pydantic import BaseSettings


class Settings(BaseSettings):
    # Redis database configuration
    host = 'db_host_name',
    port = 12277,
    password = 'db_password_name',
    decode_responses = True

