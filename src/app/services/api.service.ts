import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = 'http://localhost:5136/api/'

  httpOptions = {
    headers: new HttpHeaders({
      ContentType: 'application/json'})
  }

  constructor(
    private httpClient: HttpClient
  ) { }


  // Retrieves all products from the database
  GetAllProducts(): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}Product/GetAllProducts`)
  }

  // Retrieves a product using its id
  GetProduct(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.apiUrl}Product/GetProduct/` + id)
  }

  // Adds a product to the database
  Addproduct(addProductAttr: Product){
     return this.httpClient.post<Product>(`${this.apiUrl}Product/AddProduct/`, addProductAttr)
  }

  // Edits the selected product's attributes
  EditProduct(id: number, productAttr: Product){
    return this.httpClient.put<Product>(`${this.apiUrl}Product/UpdateProduct/` + id, productAttr)
  }

  // Deletes a product from the database
  DeleteProduct(id: number){
    return this.httpClient.delete<Product>(`${this.apiUrl}Product/DeleteProduct/` + id)
  }
}
