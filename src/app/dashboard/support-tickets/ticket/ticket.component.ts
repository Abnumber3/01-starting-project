import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../ticket.model';


@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  @Input({required: true }) data!: Ticket
  @Output() completed = new EventEmitter<string>();



  onComplete(){
    this.completed.emit(this.data.id);
  }
 
}
