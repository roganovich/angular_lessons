import { Injectable } from '@angular/core';
import {LogService} from './log.service';

@Injectable()

export class CounterService {
  counter:number = 0;

  constructor(private logService:LogService) { }

  up(){
    this.counter++;
    this.logService.log('Up');
  }

  down(){
    this.counter--;
    this.logService.log('down');
  }

  clear(){
    this.counter = 0;
  }
}
