import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

import {Coffee} from "../models/coffee";
import {throwError} from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffeeUrl = 'https://random-data-api.com/api/coffee/random_coffee';
  constructor(private http: HttpClient) {
  }
  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(`${this.coffeeUrl}?size=50`)
      .pipe(
        map((data) => {
          return data
        }),
        catchError(this.handleError)
      );
  }

  getCoffeByID(ID: number): Observable<Coffee> {
    return this.http.get<Coffee>(`${this.coffeeUrl}?id=${ID}`)
      .pipe(
        map((data) => {
          return data
        }),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
