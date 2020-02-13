import { Injectable } from '@angular/core';

const KEY = 'USER_POS';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token): void {
    window.localStorage.setItem(KEY, token);
  }

  getToken(): string {
    return window.localStorage.getItem(KEY);
  }

  removeToken(): void {
    window.localStorage.removeItem(KEY);
  }
}
