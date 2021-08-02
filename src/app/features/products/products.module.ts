import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsPageComponent } from './pages/products.page.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { RouterModule } from '@angular/router';
@NgModule({
  
  declarations: [ProductCardComponent,ProductListComponent, ProductsPageComponent, ProductsDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [ProductsPageComponent]
})
export class ProductsModule { }
