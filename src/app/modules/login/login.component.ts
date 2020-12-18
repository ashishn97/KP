import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginObj = { email: '', password: '' };
  constructor(
    private router: Router,
    private loginService: LoginService,
    private notificationService: NotificationService
  ) {}

  validate(loginObj) {
    if (ValidationService.isEmpty(loginObj.email)) {
      this.notificationService.error('Error', 'Email is required');
      return false;
    }
    if (ValidationService.isEmpty(loginObj.password)) {
      this.notificationService.error('Error', 'Password is required');
      return false;
    }
    if (!ValidationService.isValidEmail(loginObj.email)) {
      this.notificationService.error('Error', 'Email should be valid.');
      return false;
    }
    return true;
  }

  ngOnInit() {}

  async doLogin() {
    if (!this.validate(this.loginObj)) {
      return;
    }
    const result = await this.loginService.login(this.loginObj);
    if (result.statusCode != 200) {
      this.notificationService.error('Error', result.error);
      return;
    }
    localStorage.setItem('userPrincipal', JSON.stringify(result.result));
  }
}
