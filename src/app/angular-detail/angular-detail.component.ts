import { Component, Input } from '@angular/core';
import { Angular } from '../app.component';
@Component({
  selector: 'app-angular-detail',
  templateUrl: './angular-detail.component.html',
  styleUrls: ['./angular-detail.component.css']
})
export class AngularDetailComponent {
  @Input() angular?: Angular;
}
