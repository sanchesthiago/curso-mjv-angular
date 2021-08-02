import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.module';
import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  product?: Product

  constructor(private productService: ProductsService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params)=> {
      this.product = this.productService.getProductById(params.id);

    });
  }

}
