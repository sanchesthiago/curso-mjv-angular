import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import {MatDialog} from '@angular/material/dialog';
import { DialogUserComponent } from 'src/app/shared/dialog/dialog-user/dialog-user.component';

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
  

  
  
  constructor(public dialog: MatDialog) { }
  
  openDialog() {
    this.dialog.open(DialogUserComponent, {
      data:{
        title: this.user?.name,
        message: this.user?.password,
        message2: this.user?.inclusionDate,
        message3: this.user?.validRegistration,
        message4: this.user?.img
        
      }
    });
    
  }

  ngOnInit(): void {
  }
  
}

