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
  

  constructor() { }

  ngOnInit(): void {
  }
  
passTime(){
  if(this.hora<14)
  
  document.write("\assets\afternoon.png")
  //alert(`passou ${this.hora}`)
}
  



}
