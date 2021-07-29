import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data = new Date();
  hora = this.data.getHours();
  min = this.data.getMinutes();
  tempo = (`${this.hora}h:${this.min}m`)
  after = "/assets/afternoon.png"
  day ="/assets/day.png"
  night ="/assets/night.png"
  constructor() { }

  ngOnInit(): void {
  }
  
passTime(){
  if(this.hora<=12){
     return this.day
    }
  if(this.hora>=14 && this.hora<=18){
    return this.after
  }
  if(this.hora>=18 && this.hora<=23){
    return this.night
  }
  return

  
}

  



}
