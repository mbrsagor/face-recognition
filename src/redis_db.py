from redis_om import get_redis_connection
from src.all_config import Settings

settings = Settings()

redis = get_redis_connection(
    host=''.join(settings.host),
    password=''.join(settings.password),
    port=12277,
    decode_responses=True
)
