import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccessToken } from 'libs/shared/src/lib/api-dtos';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.interface';
import { ApiAuthService } from '../api-auth/api-auth.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken$$ = new BehaviorSubject<string>('');
  public accessToken$ = this.accessToken$$.asObservable();
  constructor(private router: Router, private authApi: ApiAuthService) {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      this.accessToken$$.next(JSON.parse(accessToken));
    }
  }
  login(user: User) {
        this.authApi.login(user).subscribe({
      next: (accessToken: AccessToken) => {
        this.accessToken$$.next(accessToken.access_token);
        localStorage.setItem('access_token', JSON.stringify(accessToken.access_token));
        this.router.navigate(['/file-manager']);
      },
      error: (err) => console.error('wrong password'),
    });
  }
  logout() {
    this.accessToken$$.next('');
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  isAuthenticated() {
    return this.accessToken$$.value === '' ? false : true;
  }

  getToken() {
    return this.accessToken$$.value;
  }
}
