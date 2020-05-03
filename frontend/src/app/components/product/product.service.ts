import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
      this.snackBar.open(msg, 'x',{
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
  }

  create(product: Product): Observable<Product>{ // This function creates product
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]>{ // This method read products
    return this.http.get<Product[]>(this.baseUrl);
  }

  reedById(id: string): Observable<Product>{ // This method searches for products by id
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{ // This method changes the product
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}
