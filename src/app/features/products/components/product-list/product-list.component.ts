import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.module';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


//array de produtos
products: Array<Product> =[
  {
    id:1,
    title:'Pão de Bolinha',
    weight:'500g',
    img: "/assets/pao_bolinha_1.png",
    price:40,
    supply:4
},

{
  id:2,
  title:'Beijo de mulata',
  weight:'500g',
  img: '/assets/beijo_mulata.png',
  price:20,
  supply:1
},

{
  id:3,
  title:'Copo da Felicidade',
  weight:'500g',
  img: '/assets/copo_felicidade.png',
  price:15,
  supply:1
},

{
  id:4,
  title:'Mousse',
  weight:'500g',
  img: '/assets/mousse.png',
  price:10,
  supply:3
},

{
  id:5,
  title:'Bolo',
  weight:'500g',
  img: '/assets/bolo.png',
  price:35,
  supply:3
},

{
  id:6,
  title:'Pão Recheado',
  weight:'500g',
  img: '/assets/pao_recheado.png',
  price:15,
  supply:5
},
];

//clona o array de produtos
filteredProducts: Array<Product> = this.products;


  constructor() { }

  ngOnInit(): void {
  }

  //func para filtrar os produtos
  findProducts(event: any) {
    const value = event.target.value;
    this.filteredProducts = this.products.filter(
        (product) => product.title.toUpperCase().search(value?.toUpperCase()) > -1);
  }
  


}
