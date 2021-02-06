import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  fakeBackenddata = [{ name: 'Malte', password: '12345' }];
  private readonly user$$ = new BehaviorSubject<User | null>(null);
  public readonly user$ = this.user$$.asObservable();

  login(user: User) {
    if (
      this.fakeBackenddata.some((fakeBackendDataUser) => JSON.stringify(fakeBackendDataUser) === JSON.stringify(user))
    ) {
      this.user$$.next(user);
      return true;
    }
    this.user$$.next(null);
    return false;
  }
  isAuthenticated() {
    return this.user$$.value === null ? false : true;
  }

  public get user(): User | null {
    return this.user$$.value;
  }
}
