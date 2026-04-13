import "dotenv/config";
import env from "env-var"

export const envs = {
    PORT: env.get("PORT").asPortNumber(),
    POSTGRES_URL: env.get("POSTGRES_URL").asString()
}