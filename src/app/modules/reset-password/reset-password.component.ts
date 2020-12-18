import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  passwordObj = { password: '', confirmPassword: '' };

  constructor(
    private loginService: LoginService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  validate(passwordObj) {
    if (ValidationService.isEmpty(passwordObj.password)) {
      this.notificationService.error('Error', 'Password is required');
      return false;
    }
    if (ValidationService.isEmpty(passwordObj.confirmPassword)) {
      this.notificationService.error('Error', 'Confirm Password is required.');
      return false;
    }
    if (passwordObj.password !== passwordObj.confirmPassword) {
      this.notificationService.error('Error', 'Passwords do not match.');
      return false;
    }
    return true;
  }

  resetPassword = async () => {
    if (!this.validate(this.passwordObj)) {
      return;
    }
    const result = await this.loginService.resetPassword(this.passwordObj);
    if (result.statusCode != 200) {
      this.notificationService.success('Success', result.result);
      this.router.navigate(['login']);
    } else {
      this.notificationService.error('Error', result.error);
    }
  };

  ngOnInit() {}

  // validate(forgotPasswordDTO) {
  //     if (ValidationService.isEmpty(forgotPasswordDTO.email)) {
  //         this.notificationService.error('Error', 'Email is required');
  //         return false;
  //     }
  //     if (ValidationService.isEmpty(forgotPasswordDTO.otp)) {
  //         this.notificationService.error('Error', 'OTP is required');
  //         return false;
  //     }
  //     if (ValidationService.isEmpty(forgotPasswordDTO.password)) {
  //         this.notificationService.error('Error', 'Password is required.');
  //         return false;
  //     }
  //     if (ValidationService.isEmpty(forgotPasswordDTO.confirmPassword)) {
  //         this.notificationService.error('Error', 'Confirm Password is required.');
  //         return false;
  //     }
  //     if (forgotPasswordDTO.password !== forgotPasswordDTO.confirmPassword) {
  //         this.notificationService.error('Error', 'Passwords do not match.');
  //         return false;
  //     }
  //     return true;
  // }

  generateOTP = async () => {
    this.showHideLoader();
    // const result = await this.loginService.generateOTP({
    //     email: this.forgotPassword.email,
    // });
    // if (result.statusCode == 200) {
    //     this.notificationService.success('Generated', result.result);
    //     this.forgotPassword.isOTPGenerated = true;
    // } else {
    //     this.notificationService.error('Error', result.error);
    // }
  };

  changePassword = async () => {
    // if (!this.validate(this.forgotPassword)) {
    //     return;
    // }
    // const result = await this.loginService.resetPassword(this.forgotPassword);
    // if (result.statusCode == 200) {
    //     this.notificationService.success('Saved', 'Changed Successfully.');
    // } else {
    //     this.notificationService.error('Error', result.error);
    // }
  };

  showHideLoader() {
    // this.sharedService.showLoader();
    // setTimeout(() => {
    //     this.sharedService.hideLoader();
    // }, 500);
  }
}
