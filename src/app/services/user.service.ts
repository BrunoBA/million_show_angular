import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Response } from "./response";

const URL = environment.URL_API
const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = `${URL}/users`

  constructor(private http: HttpClient) { }

  getAll(questionId){
    return this.http.get<Response<Array<string>>>(this.BASE_URL + '?questionId=' + questionId, httpOptions)
  }

  create({username, questionId}) {
    return this.http.post<Response<string>>(this.BASE_URL, { username, questionId })
  }

}
