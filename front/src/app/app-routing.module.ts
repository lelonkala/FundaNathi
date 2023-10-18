import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ApsCalculatorComponent } from './aps-calculator/aps-calculator.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component:LandingComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'aps-calculator', component:ApsCalculatorComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'dashboard', component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
