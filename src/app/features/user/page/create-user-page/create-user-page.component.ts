import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent implements OnInit {
  @Input()
  user: User =this.userService.getDefaultStudent();

  constructor(private userService: UserService, private router: Router) {
    
  }
  
  ngOnInit(): void {

  }

  onSubmit(userForm: NgForm) {
    const user: User = {
      id: this.user.id,
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      inclusionDate: this.user.inclusionDate,
      validRegistration: this.user.validRegistration,
      img:this.user.img      
    };
    this.userService.createUser(user);
    alert('Usuario adicionado com sucesso!');
    this.router.navigateByUrl('/user');
  }

}
