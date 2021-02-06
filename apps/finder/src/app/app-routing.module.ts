import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/login/auth.guard';
import { LoginComponent } from './shared/login/login/login.component';

const routes: Routes = [
  {
    path: 'file-manager',
    canActivate: [AuthGuard],
    loadChildren: () => import('./feature/file-manager/file-manager.module').then((m) => m.FileManagerModule),
  },
  {
    path: 'database',
    canActivate: [AuthGuard],
    loadChildren: () => import('./feature/database/database.module').then((m) => m.DatabaseModule),
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
