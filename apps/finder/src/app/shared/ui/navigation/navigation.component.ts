import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'finder-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );
  accessToken$: Observable<boolean>;
  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {
    this.accessToken$ = authService.accessToken$.pipe((map((accessToken: string) => accessToken === '' ? false : true)));
  }

  logout() {
    this.authService.logout();
  }
}
