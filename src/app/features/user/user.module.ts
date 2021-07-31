import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserPageComponent } from './page/user-page/user-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserPageDetailsComponent } from './page/user-page-details/user-page-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserPageComponent,
    UserComponent,
    UserListComponent,
    UserPageDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [UserPageComponent]
})
export class UserModule { }
