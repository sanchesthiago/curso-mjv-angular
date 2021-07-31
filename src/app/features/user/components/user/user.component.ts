import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user?: User;
  
  @Input()
  detail: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
