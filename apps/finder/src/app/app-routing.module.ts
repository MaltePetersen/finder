import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'file-manager',
    loadChildren: () => import('./feature/file-manager/file-manager.module').then((m) => m.FileManagerModule),
  },
  { path: 'database', loadChildren: () => import('./feature/database/database.module').then((m) => m.DatabaseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
