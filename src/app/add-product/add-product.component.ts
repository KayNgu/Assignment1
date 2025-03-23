import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../shared/product'; //imports the product class, allowing for objects of type 'Product' to be created

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {

  addProductAttr: Product ={
    id: 0,
    productName: '',
    price: 0,
    description: ''
  };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  addProduct() {
    this.apiService.AddProduct(this.addProductAttr).subscribe({
      next: (response) => {
        this.router.navigate(['products'])
        console.log(response)
      }
    });
  }
  
  cancel(){
    this.router.navigate(["products"]);
  };

}
