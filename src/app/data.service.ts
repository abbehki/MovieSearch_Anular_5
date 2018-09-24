import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  private idSource = new BehaviorSubject(0);
  idMessage = this.idSource.asObservable();


  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
   changeId(id:number){
    this.idSource.next(id)
   }
}