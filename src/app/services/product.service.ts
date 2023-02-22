import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products"

  getProducts(categoryId: number): Observable<Product[]> {
    let newPath = this.path
    if (categoryId) {
      newPath = newPath + "?categoryId=" + categoryId
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage: string
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Bir Hata Oluştu"
    } else {
      errorMessage = "Sistemsel Bir Hata!!"
    }
    return throwError(() => new Error(errorMessage))
  }
}
