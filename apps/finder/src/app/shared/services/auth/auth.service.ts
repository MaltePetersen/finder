import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fakeBackenddata = [{ name: 'Malte', password: '12345' }];
  private readonly user$$ = new BehaviorSubject<User | null>(null);
  public readonly user$ = this.user$$.asObservable();
  constructor(private router: Router) {
    const user = localStorage.getItem('user');
    if (user) {
      this.login(JSON.parse(user));
    }
  }
  login(user: User) {
    if (
      this.fakeBackenddata.some((fakeBackendDataUser) => JSON.stringify(fakeBackendDataUser) === JSON.stringify(user))
    ) {
      this.user$$.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    this.user$$.next(null);
    return false;
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
}
