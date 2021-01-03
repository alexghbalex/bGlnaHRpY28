import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) {
  }

  signIn(name: string): void {
    this.cookieService.set('name', name);
  }

  isSignedIn(): boolean {
    return !!this.cookieService.get('name');
  }

  getName(): string {
    return this.cookieService.get('name');
  }
}
