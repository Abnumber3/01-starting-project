import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent  {

@ViewChild('form') form?: ElementRef<HTMLFormElement>;


  onSubmit(title: string, request: string){
    console.log('Title: ', title, 'Request: ', request)
    this.form?.nativeElement.reset();
  }

}
