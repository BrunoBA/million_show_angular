import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const URL = environment.URL_API

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  BASE_URL = `${URL}/questions/`

  constructor(private http: HttpClient) { }

  create () {
    return this.http.post<any>(this.BASE_URL, {})
  }
}
