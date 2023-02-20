import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class CategoryService {
  
  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/categories"

  getProducts():Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  handleError(err : HttpErrorResponse) {
    let errorMessage:string
    if (err.error instanceof ErrorEvent) {
      errorMessage="Bir Hata Oluştu"
    }else{
      errorMessage ="Sistemsel Bir Hata!!"
    }
    return throwError(()=>new Error(errorMessage))
  }
}
