import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor (public messageService: MessageService) {}
  // messageService needs to be public because I am going to bind it in the templates and angular only binds to public component properties
}
