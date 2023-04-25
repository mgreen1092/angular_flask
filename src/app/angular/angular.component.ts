import { Component } from '@angular/core';
import { Angular } from '../app.component'
// import { ANGULAR } from '../mock-angular';
import { AngularService } from '../angular.service';
@Component({
  selector: 'app-angular',
  // CCS element selector
  templateUrl: './angular.component.html',
  // location of the component's template file
  styleUrls: ['./angular.component.css']
  // location of private CSS styles
})
export class AngularComponent {
  constructor (private angularService: AngularService) {}
  angular: Angular[]= []

  selectedAngularInformation ?: Angular;

  onSelect(angular: Angular): void {
    this.selectedAngularInformation = angular
  }
  getAngular (): void {
    this.angular = this.angularService.getAngular();
  }
  ngOnInit (): void {
    this.getAngular()
  }
}
