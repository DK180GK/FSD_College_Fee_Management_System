import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { Observable } from 'rxjs/internal/Observable';

const API_URL ="http://localhost:8080/api/v1/students";

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private http: HttpClient) { }



  doLogin(request: LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(API_URL, request);
  }
}
