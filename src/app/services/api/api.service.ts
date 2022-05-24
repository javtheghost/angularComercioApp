import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/models/login.interface';
import { ResponseI } from 'src/app/models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getProvidersI } from 'src/app/models/Provider.interface';
import { Token } from '@angular/compiler';
import { TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://127.0.0.1:3333/"
  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "login"; //apunta al endpoint login
    return this.http.post<ResponseI>(direccion, form);
  }


  getProviders():Observable<getProvidersI[]>{
    let direccion = this.url + "providers"
    return this.http.get<getProvidersI[]>(direccion)
  }
}
