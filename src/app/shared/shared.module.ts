import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { RouterModule } from '@angular/router';
import { DialogUserComponent } from './dialog/dialog-user/dialog-user.component';



import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, CpfPipe, DialogUserComponent,],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CpfPipe,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    
    
    
  ]
})
export class SharedModule { }
