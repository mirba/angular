import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IDepartment } from './department';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
	private _url: string = "/assets/data/departments.json";

  constructor(private _http: HttpClient) { }
	
	getDepartments(): Observable<IDepartment[]>{
		return this._http.get<IDepartment[]>(this._url)
				.pipe(catchError(this.errorHandler));
	}
	
	errorHandler(error: HttpErrorResponse){
		return throwError(error.message || "Server Error!");
	}
	
}