import { Component, Input, Output, EventEmitter, Signal, signal } from '@angular/core';
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
  detailsVisible = signal(true);


  onComplete(){
    this.completed.emit(this.data.id);
  }

  onToggleDetails(){
    this.detailsVisible.set(!this.detailsVisible())

  }
 
}
