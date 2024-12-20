import { createClient } from "redis";

const redisClient = createClient();

redisClient.on('error',(err)=>{
    console.log('Redis Client Error',err)
})

const connectRedis = async() =>{
    await redisClient.connect()
}

export {redisClient,connectRedis}