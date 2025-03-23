import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../shared/product'; //imports the product class, allowing for objects of type 'Product' to be created

@Component({
  selector: 'app-edit-product',
  standalone: false,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit{

  // Stores the retrieved Product
  productAttr: Product = {
    id: 0,
    productName: '',
    price: 0,
    description: ''
  };

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

    
  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const productId = params.get('id');


          // Call the API
          if(productId){
            this.apiService.GetProduct(productId).subscribe({
              next: (response) => {

                this.productAttr = response;
           
              }
            });
          }
           
        }
        
      })

  }


  updateProduct() {
    this.apiService.EditProduct(this.productAttr.id, this.productAttr).subscribe({
      next: (response) =>{
       
        this.router.navigate(['products'])
      }
    });
  }

  cancel(){
    this.router.navigate(["products"]);
  }

}
