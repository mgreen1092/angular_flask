import { Component } from '@angular/core';
import { Angular } from '../app.component'
// import { ANGULAR } from '../mock-angular';
import { AngularService } from '../angular.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-angular',
  // CCS element selector
  templateUrl: './angular.component.html',
  // location of the component's template file
  styleUrls: ['./angular.component.css']
  // location of private CSS styles
})
export class AngularComponent {
  constructor (private angularService: AngularService, private messageService:MessageService) {}
  angular: Angular[]= []

  selectedAngularInformation ?: Angular;

  onSelect(angular: Angular): void {
    this.selectedAngularInformation = angular;
    this.messageService.add(`AngularComponent: Selected angular id=${angular.id}`)
  }
  getAngular (): void {
    this.angularService.getAngular().subscribe(angular => this.angular = angular);
  }
  ngOnInit (): void {
    this.getAngular()
  }

}
