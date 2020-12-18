import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterFinalStepComponent } from './modules/register/final-step/final-step.component';
import { RegisterFirstStepComponent } from './modules/register/first-step/first-step.component';
import { RegisterComponent } from './modules/register/register.component';
import { RegisterSecondStepComponent } from './modules/register/second-step/second-step.component';

const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
