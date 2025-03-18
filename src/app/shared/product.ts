import { Injectable } from "@angular/core";

// Injectable to allow it to be injected into other components
@Injectable({
    providedIn: 'root'
})


// Definition of the Product Class
export class Product {

    Id: number = 0;
    ProductName: string = '';
    Price: string = '';
    Description: string = '';
    
}
