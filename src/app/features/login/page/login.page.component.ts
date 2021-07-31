import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user/services/user.service';


@Component({
  templateUrl: './login.page.component.html',
  styleUrls: ['./login.page.component.scss']
})
export class LoginPageComponent implements OnInit {
  error: boolean = false;
  constructor(private userService: UserService, private router: Router) { }
  

  ngOnInit(): void {
  }
  validateUser(loginForm: NgForm) {
    const user = this.userService.getUserByEmailAndPassword(loginForm.value.email, loginForm.value.password);
    if(!user) {
      return this.error = true;
    }
    this.router.navigateByUrl('user');
    return sessionStorage.setItem('currentUser', JSON.stringify(user));

  }
    
      
  }

