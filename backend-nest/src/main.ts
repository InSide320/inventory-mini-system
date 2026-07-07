import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT_NEST ?? 4002);
  console.log(`Server started http://localhost:${process.env.PORT_NEST ?? 4002}`);
}
bootstrap();
