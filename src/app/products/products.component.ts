import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/product'; //imports the product class, allowing for objects of type 'Product' to be created
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];

  @Input() product!: Product;

  constructor(private apiservice: ApiService, private router: Router) {}
  
  GetProducts()
  {
    this.apiservice.GetAllProducts().subscribe(result => {
      let productList: any[] = result
      productList.forEach((element) => {
        this.products.push(element)
      });
      this.products.reverse();
    })
  }
  
  
    ngOnInit(): void {
      
      this.GetProducts()
      console.log(this.products)
      
    }
}
