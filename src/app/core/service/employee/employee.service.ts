import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import {Employee} from 'src/app/shared/model/employee';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class EmployeeService {
    appid = 'e3af58d9d5e58f975d0cbf176102d731';

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }
    
      /** headers in an httpOptions object that will be passed to every HttpClient save method. */
      httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      };
    
      getEmployees(): Observable<Employee[]> {
        let url = `https://localhost:44318/api/employees/allemployees`;
        return this.http
          .get<Employee[]>(url)
          .pipe(
        
          )
  }
}