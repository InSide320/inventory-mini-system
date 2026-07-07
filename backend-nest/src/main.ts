import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { config } from "dotenv";

config({ path: ".env" });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.NEST_PORT || 4002, "0.0.0.0");
  console.log(`Server started http://localhost:${process.env.NEST_PORT || 4002}`);
}

bootstrap();
