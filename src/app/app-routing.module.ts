import { AddDeveloperComponent } from './developers/add-developer/add-developer.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { GetDevelopersComponent } from './developers/get-developer/get-developers.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'browse/:no',
    component: GetDevelopersComponent,
    children: [{ path: ':no', component: GetDevelopersComponent }],
  },
  { path: 'contact', component: ContactComponent },

  {
    path: 'info',
    component: InfoComponent,
    canActivate: [AuthGuardService],
    data: { expectedRole: 'Admin' },
  },

  {
    path: 'register',
    component: AddDeveloperComponent,
    canActivate: [AuthGuardService],
    data: { expectedRole: 'Admin' },
  },

  { path: 'login', component: AddDeveloperComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
