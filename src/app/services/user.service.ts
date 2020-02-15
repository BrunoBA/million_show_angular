import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Response } from "./response";
import { User } from './user';

const URL = environment.URL_API
const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = `${URL}/users`

  constructor(private http: HttpClient) { }

  getAll(questionId: string) {
    return this.http.get<Response<Array<string>>>(this.BASE_URL + '?questionId=' + questionId, httpOptions)
  }

  create({ username, questionId }) {
    return this.http.post<Response<User>>(this.BASE_URL, { username, questionId })
  }

  delete({ id, questionId }) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        questionId
      },
    };

    return this.http.delete<Response<boolean>>(this.BASE_URL + '/' + id, options)
  }

}
