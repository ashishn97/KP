import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterFinalStepComponent } from './modules/register/final-step/final-step.component';
import { RegisterFirstStepComponent } from './modules/register/first-step/first-step.component';
import { RegisterComponent } from './modules/register/register.component';
import { RegisterSecondStepComponent } from './modules/register/second-step/second-step.component';
import { ResetPasswordComponent } from './modules/reset-password/reset-password.component';
import { AddCorporateComponent } from './modules/super-admin/add-corporate/add-corporate.component';
import { SuperAdminComponent } from './modules/super-admin/super-admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      {
        path: 'first-step',
        component: RegisterFirstStepComponent,
      },
      {
        path: 'second-step',
        component: RegisterSecondStepComponent,
      },
      {
        path: 'final-step',
        component: RegisterFinalStepComponent,
      },
    ],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'super-admin',
    component: SuperAdminComponent,
    children: [
      {
        path: 'add-corporate',
        component: AddCorporateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
