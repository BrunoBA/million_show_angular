import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Response } from './response';
import { Question } from './question';

const URL = environment.URL_API;

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  BASE_URL = `${URL}/questions/`;

  constructor(private http: HttpClient) { }

  create() {
    return this.http.post<Response<string>>(this.BASE_URL, {});
  }

  show(questionId: number) {
    return this.http.get<Response<Array<Question>>>(`${this.BASE_URL}${questionId}`);
  }
}
