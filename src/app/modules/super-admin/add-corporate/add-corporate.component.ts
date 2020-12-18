import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CorporateDTO } from 'src/app/DTO/CorporateDTO';
import { LoginService } from 'src/app/services/LoginService';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ValidationService } from 'src/app/shared/service/validation.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-corporate',
  templateUrl: './add-corporate.component.html',
  styleUrls: ['./add-corporate.component.scss'],
})
export class AddCorporateComponent implements OnInit {
  corporateDTO: CorporateDTO;
  corporates = [
    { id: 1, name: '1', enabled: false },
    { id: 2, name: '2', enabled: true },
    { id: 3, name: '3', enabled: false },
    { id: 4, name: '4', enabled: true },
    { id: 5, name: '5', enabled: false },
  ];
  isChecked: Boolean = false;
  corporateFilter = { searchTerm: '' };
  modelChanged: Subject<string> = new Subject<string>();

  constructor(
    private router: Router,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {
    this.corporateDTO = new CorporateDTO();
    this.corporateDTO.contactDetails = {
      firstName: '',
      lastName: '',
      contactNumber: '',
      email: '',
    };
    this.corporateDTO.adminDetails = { firstName: '', lastName: '', email: '' };
    this.modelChanged
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);
        this.corporateFilter.searchTerm = value;
        this.loadCorporates();
      });
  }

  ngOnInit() {}

  validate(corporateDTO) {
    if (ValidationService.isEmpty(corporateDTO.name)) {
      this.notificationService.error('Error', 'Corporate name is required');
      return false;
    }
    if (ValidationService.isEmpty(corporateDTO.url)) {
      this.notificationService.error('Error', 'Url is required');
      return false;
    }
    if (ValidationService.isEmpty(corporateDTO.noOfEmployees)) {
      this.notificationService.error(
        'Error',
        'Number of Employees is required'
      );
      return false;
    }
    if (ValidationService.isEmpty(corporateDTO.contactDetails.firstName)) {
      this.notificationService.error(
        'Error',
        'First Name of Contact Details is required'
      );
      return false;
    }
    if (ValidationService.isEmpty(corporateDTO.contactDetails.lastName)) {
      this.notificationService.error(
        'Error',
        'Last Name of Contact Details is required'
      );
      return false;
    }
    if (ValidationService.isEmpty(corporateDTO.contactDetails.contactNumber)) {
      this.notificationService.error(
        'Error',
        'Contact Number of Contact Details is required'
      );
      return false;
    }
    if (ValidationService.isEmpty(corporateDTO.contactDetails.email)) {
      this.notificationService.error(
        'Error',
        'Email of Contact Details is required'
      );
      return false;
    }
    if (ValidationService.isValidEmail(corporateDTO.contactDetails.email)) {
      this.notificationService.error(
        'Error',
        'Email of Contact Details is not valid'
      );
      return false;
    }
    if (ValidationService.isEmpty(corporateDTO.adminDetails.firstName)) {
      this.notificationService.error('Error', "Admin's First Name is required");
      return false;
    }
    if (ValidationService.isEmpty(corporateDTO.adminDetails.lastName)) {
      this.notificationService.error('Error', "Admin's Last Name is required");
      return false;
    }
    if (ValidationService.isEmpty(corporateDTO.adminDetails.email)) {
      this.notificationService.error('Error', "Admin's Email is required");
      return false;
    }
    if (ValidationService.isValidEmail(corporateDTO.contactDetails.email)) {
      this.notificationService.error('Error', "Admin's Email is not valid");
      return false;
    }
    return true;
  }

  loadCorporates = () => {};

  addCorporate = async () => {
    if (!this.validate(this.corporateDTO)) {
      return;
    }
    console.log('tttttt', this.corporateDTO);
    // const isCompanyDomain = await this.loginService.domainCheck(
    //   `domain=${this.email}`
    // );
    // if (isCompanyDomain.statusCode != 200) {
    //   this.notificationService.error('Error', isCompanyDomain.error);
    //   return;
    // }
    // this.router.navigate(['../second-step'], {
    //   queryParams: { email: this.email },
    //   relativeTo: this.route,
    // });
  };

  editCorporate = (corporateId) => {
    console.log(corporateId);
  };

  deleteCorporate = (corporateId) => {
    console.log(corporateId);
  };

  checkValue = (isChecked) => {
    console.log('eeeeee', isChecked);
  };
}
