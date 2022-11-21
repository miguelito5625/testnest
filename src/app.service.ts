import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("ESTO ES UNA PRUEBA");
    
    return 'Hello World!';
  }
}
