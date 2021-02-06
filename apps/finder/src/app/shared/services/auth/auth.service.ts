import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.interface';
import { ApiAuthService } from '../api-auth/api-auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fakeBackenddata = [{ name: 'Malte', password: '12345' }];
  private readonly user$$ = new BehaviorSubject<User | null>(null);
  public readonly user$ = this.user$$.asObservable();
  private accessToken$$ = new BehaviorSubject<string>('');
  public accessToken$ = this.accessToken$$.asObservable();
  constructor(private router: Router, private authApi: ApiAuthService) {
    const user = localStorage.getItem('user');
    if (user) {
      this.login(JSON.parse(user));
    }
  }
  login(user: User) {
    this.authApi.login(user).subscribe({
      next: (data) => {
        this.accessToken$$.next(data.accessToken);
      },
      error: (err) => console.error('wrong password'),
    });
    return true;
    /*  if (      ) {
      this.user$$.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    this.user$$.next(null);
    return false;*/
  }
  logout() {
    this.user$$.next(null);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  isAuthenticated() {
    return this.user$$.value === null ? false : true;
  }

  public get user(): User | null {
    return this.user$$.value;
  }
  getToken() {
    return '';
  }
}
