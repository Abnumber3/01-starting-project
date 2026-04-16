import { Component,  } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {

 tickets: Ticket[]=[]

  onAddTicket(ticket: {title: string; text: string}){
    const newTicket : Ticket ={
      title: ticket.title,
      request: ticket.text,
      id: Math.random().toString(36).substring(2),
      status: 'open'
    }
   this.tickets = [...this.tickets, newTicket]

  }


}
