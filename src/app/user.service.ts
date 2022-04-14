import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private isLogin = false;

  setIsLogin(isLogin: boolean) {
      this.isLogin = isLogin;
  }

  getIsLogin(): boolean {
    return this.isLogin;
  }
  
  registerUser() {
    return this.http.get('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d');
  }

  getProfile() {
    return this.http.get('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2');
  }
}
