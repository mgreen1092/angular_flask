import { Injectable } from '@angular/core';
import { ANGULAR } from './mock-angular';
import { Angular } from './app.component';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  constructor(private messageService: MessageService) { }

  // getAngular (): Angular [] {
  //   return ANGULAR
  // }

  getAngular(): Observable<Angular[]> {
    const angular = of(ANGULAR)
    this.messageService.add('AngularService: fetched Angular')
    // sends a message when angular is fetched 
    return angular
  }
}
