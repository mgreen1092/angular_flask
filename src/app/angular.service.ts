import { Injectable } from '@angular/core';
import { ANGULAR } from './mock-angular';
import { Angular } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AngularService {

  // constructor(private angularService: AngularService) { }

  getAngular (): Angular [] {
    return ANGULAR
  }
}
