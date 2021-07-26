import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsPageComponent } from './pages/products.page.component';
@NgModule({
  
  declarations: [ProductCardComponent,ProductListComponent, ProductsPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductsPageComponent]
})
export class ProductsModule { }
