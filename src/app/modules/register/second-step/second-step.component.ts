import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/RegisterService';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
})
export class RegisterSecondStepComponent implements OnInit {
  registerObj = {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    role: 'USER',
  };

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.registerObj['email'] = params['email'];
    });
  }

  validate(registerObj) {
    if (ValidationService.isEmpty(registerObj.firstName)) {
      this.notificationService.error('Error', 'First Name is required');
      return false;
    }
    if (ValidationService.isEmpty(registerObj.lastName)) {
      this.notificationService.error('Error', 'Last Name is required');
      return false;
    }
    if (ValidationService.isEmpty(registerObj.password)) {
      this.notificationService.error('Error', 'Password is required.');
      return false;
    }
    if (ValidationService.isEmpty(registerObj.confirmPassword)) {
      this.notificationService.error('Error', 'Confirm Password is required.');
      return false;
    }
    if (registerObj.password !== registerObj.confirmPassword) {
      this.notificationService.error('Error', 'Passwords do not match.');
      return false;
    }
    return true;
  }

  proceed = async () => {
    if (!this.validate(this.registerObj)) {
      return;
    }
    const result = await this.registerService.save(this.registerObj);
    if (result.statusCode != 200) {
      this.notificationService.error('Error', result.error);
      return;
    }
    this.router.navigate(['../final-step'], {
      queryParams: { email: this.registerObj.email },
      relativeTo: this.route,
    });
  };

  ngOnInit() {}
}
