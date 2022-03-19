from redis_om import get_redis_connection
from src.all_config import Settings

settings = Settings()

redis = get_redis_connection(
    host=''.join(settings.host),
    password=''.join(settings.password),
    port=''.join(map(str, settings.port)),
    decode_responses=settings.decode_responses
)
