import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
})
export class RegisterFirstStepComponent implements OnInit {
  email = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  validate(email) {
    if (ValidationService.isEmpty(email)) {
      this.notificationService.error('Error', 'Email is required');
      return false;
    }
    if (!ValidationService.isValidEmail(email)) {
      this.notificationService.error('Error', 'Email should be valid.');
      return false;
    }
    if (ValidationService.isPublicDomainEmail(email)) {
      this.notificationService.error(
        'Error',
        'Please use your work email address'
      );
      return false;
    }
    return true;
  }

  proceed = async () => {
    if (!this.validate(this.email)) {
      return;
    }
    const isCompanyDomain = await this.loginService.domainCheck(
      `domain=${this.email}`
    );
    if (isCompanyDomain.statusCode != 200) {
      this.notificationService.error('Error', isCompanyDomain.error);
      return;
    }
    this.router.navigate(['../second-step'], {
      queryParams: { email: this.email },
      relativeTo: this.route,
    });
  };
}
