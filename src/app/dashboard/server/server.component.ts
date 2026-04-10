import { AfterContentInit, AfterViewInit, Component, DestroyRef,  OnInit,  } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {


  currentStatus: string = '';
  


  constructor(private destroy: DestroyRef) {}


  ngOnInit(){

    const interval = setInterval(()=>{
      const randomValue = Math.random();
      if(randomValue < 0.5){
        this.currentStatus = 'online';
      } else if (randomValue < 0.8){
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
      console.log(randomValue)
    }, 5000)  

    this.destroy.onDestroy(()=>{
      clearInterval(interval);
    })

  
  }


  ngAfterViewInit(){

  }

 

}
