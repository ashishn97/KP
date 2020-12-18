import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/LoginService';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './modules/register/register.component';
import { RegisterFirstStepComponent } from './modules/register/first-step/first-step.component';
import { RegisterSecondStepComponent } from './modules/register/second-step/second-step.component';
import { RegisterFinalStepComponent } from './modules/register/final-step/final-step.component';
import { RegisterService } from './services/RegisterService';
import { NotificationService } from './shared/service/notification.service';
import { BroadcastService } from './shared/service/MessageService';
import { ValidationService } from './shared/service/validation.service';
import { SharedService } from './shared/service/shared.service';
import { XNotificationComponent } from './core/x-notification/x-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    RegisterFirstStepComponent,
    RegisterSecondStepComponent,
    RegisterFinalStepComponent,
    XNotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    LoginService,
    RegisterService,
    NotificationService,
    BroadcastService,
    ValidationService,
    SharedService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
