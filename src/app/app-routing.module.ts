import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './features/products/pages/products.page.component';
import { LoginPageComponent } from './features/login/page/login.page.component';
import { ProductsModule } from './features/products/products.module';
import { ContactPageComponent } from './features/contact/page/contact.page.component';
import { UserPageComponent } from './features/user/page/user-page/user-page.component';
import { UserPageDetailsComponent } from './features/user/page/user-page-details/user-page-details.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProductsDetailsComponent } from './features/products/pages/products-details/products-details.component';
import { CreateUserPageComponent } from './features/user/page/create-user-page/create-user-page.component';




const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'user', component: UserPageComponent, canActivate: [AuthGuard]},
  { path: 'user-details/:id', component:  UserPageDetailsComponent, canActivate: [AuthGuard]},
  { path: 'user-create', component:  CreateUserPageComponent, canActivate: [AuthGuard]},  
  { path: 'products-details/:id', component:  ProductsDetailsComponent, canActivate: [AuthGuard]},
  
  
 
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
