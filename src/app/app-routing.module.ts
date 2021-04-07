import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/repository', pathMatch: 'full' },
  { path: 'repository', component: RepositoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
