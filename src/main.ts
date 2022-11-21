import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/mikeserver1.tk/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/mikeserver1.tk/cert.pem'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  app.enableCors();
  // await app.listen(parseInt(process.env.PORT) || 3000);
  await app.listen(443);
}
bootstrap();
