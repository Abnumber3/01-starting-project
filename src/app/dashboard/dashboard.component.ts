import { Component, Input } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { TrafficComponent } from '../traffic/traffic.component';
import { SupportTicketsComponent } from '../support-tickets/support-tickets.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ServerComponent, TrafficComponent, SupportTicketsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
@Input() dummyTrafficData: { id: string; value: number }[] = [];

}
