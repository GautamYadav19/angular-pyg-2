import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  baseUri: string = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}
  // getproductlist

  createProduct(product: any) {
    //later we update data type like an object kase bante ho
    return this.http
      .post(`http://localhost:3000/api/createproduct`, product)
      .pipe(catchError(this.errorMsg));
  }
  getproductlist(){
    return this.http.get(`${this.baseUri}/getproductlist`).pipe(catchError(this.errorMsg))
  }

  errorMsg(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code :${error.status}\nMessage${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
