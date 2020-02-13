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

  getAll(){
    return this.http.get<Response<Array<string>>>(this.BASE_URL + '?questionId=b867fafae5152c567c0338cdb8d4eaf7828e340524557e5632f84938f0d77fd3302bfcd0b2c03542e5ab40a2716c7962933b77856a53d1d8757309981509d1602d5df8cb8c807744c3ffd4f3237e215f81aa5b33bcb0128d04e7ff81b399fded7f1ad74a17042164d835dfcc63049b85703d1c1669ccabb1ae30ed5b4e7d415b9daaea9e60', httpOptions)
  }

  create({username, questionId}) {
    return this.http.post<Response<string>>(this.BASE_URL, { username, questionId })
  }

}
