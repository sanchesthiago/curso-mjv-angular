import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.module';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
cpf='38409309874';
  @Input()
  product?: Product;

  @Input()
  detail: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // func para mascara preco
  transformPrice(price: number) {
    var f = this.product?.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return f
}
  addToCart() {
    alert(`O produto ${this.product?.title} foi adicionado ao carrinho!`);
  }
}
