import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Nest';
  }

  getProducts(): any[] {
    return [
	    {id: 1, product: 'pencil', price: 12.3},
	    {id: 2, product: 'apple', price: 0.9}
    ];	  
  }
}
