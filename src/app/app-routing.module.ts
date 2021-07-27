
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './features/products/pages/products.page.component';
import { LoginPageComponent } from './features/login/page/login.page.component';
import { ProductsModule } from './features/products/products.module';
import { ContactPageComponent } from './features/contact/page/contact.page.component';
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'contact', component: ContactPageComponent}
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
