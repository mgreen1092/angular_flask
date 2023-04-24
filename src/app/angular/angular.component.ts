import { Component } from '@angular/core';
import { Angular } from '../app.component'
import { ANGULAR } from '../mock-angular';
@Component({
  selector: 'app-angular',
  // CCS element selector
  templateUrl: './angular.component.html',
  // location of the component's template file
  styleUrls: ['./angular.component.css']
  // location of private CSS styles
})
export class AngularComponent {
  angular = ANGULAR

  selectedAngularInformation ?: Angular;

  onSelect(angularInformation: Angular): void {
    this.selectedAngularInformation = angularInformation
  }
}
