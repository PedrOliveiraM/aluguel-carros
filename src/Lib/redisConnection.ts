import { createClient } from "redis";

// Configuração do cliente Redis
const redisClient = createClient({
    socket: {
        host: 'redis',
        port: 6379,
      }
});
redisClient.connect().catch(console.error);

export default redisClient;