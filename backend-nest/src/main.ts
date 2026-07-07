import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { config } from "dotenv";
import { ValidationPipe } from "@nestjs/common";

config({ path: ".env" });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  });
  await app.listen(process.env.NEST_PORT || 4002, "0.0.0.0");
  console.log(`Server started http://localhost:${process.env.NEST_PORT || 4002}`);
}

bootstrap();
