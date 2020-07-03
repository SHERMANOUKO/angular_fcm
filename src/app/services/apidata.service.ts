import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  apiUrl: string = 'http://localhost:8000/api/v1/'

  constructor(private httpClient:HttpClient) { }

  get(apiEndPoint){
    return this.httpClient.get<any>(this.apiUrl+apiEndPoint)
  }

  post(data,apiEndPoint){
    return this.httpClient.post<any>(this.apiUrl+apiEndPoint,data);
  }
}
