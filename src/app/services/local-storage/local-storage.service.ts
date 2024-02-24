import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getCookieConformation(){
    return localStorage.getItem("cookie_concent");
  }

  setCookieConformation(){
    localStorage.setItem("cookie_concent", "ok");
  }
}
