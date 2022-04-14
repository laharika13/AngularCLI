import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: 'register', pathMatch: 'full', component: RegistrationPageComponent },
  { path: 'profile', pathMatch: 'full', component: ProfilePageComponent, canActivate:[UserGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
