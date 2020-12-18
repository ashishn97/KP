import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/LoginService';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss'],
})
export class RegisterFinalStepComponent implements OnInit {
  email: '';
  constructor(
    private router: Router,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
  }

  ngOnInit() {}
}
