import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './page/login.page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginPageComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
    
  ],
  exports: [LoginPageComponent]
})
export class LoginModule { }
