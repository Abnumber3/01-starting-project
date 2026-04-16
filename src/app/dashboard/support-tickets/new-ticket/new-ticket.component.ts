import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
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
@Output() add = new EventEmitter<{title:string; text:string}>();


  onSubmit(title: string, request: string){
    if(!title || !request) return;
    this.add.emit({title: title, text: request})
    console.log('Title: ', title, 'Request: ', request)
    this.form?.nativeElement.reset();
  }

}
