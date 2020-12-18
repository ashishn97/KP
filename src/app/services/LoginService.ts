import { Injectable } from '@angular/core';
import { AbstractHttpService } from './AbstractHttpService';

/**
 * @export
 * @class LoginService
 * @extends {AbstractHttpService<any>}
 */
@Injectable()
export class LoginService extends AbstractHttpService<any> {
  url: string = 'http://localhost:4000/users';

  public async emailCheck(email) {
    return await this.get(email, this.url + '/emailCheck');
  }

  public async domainCheck(email) {
    return await this.get(email, this.url + '/domainCheck');
  }

  public async doAdminLogin(loginObj) {
    return await this.post(loginObj, this.url + '/login/admin');
  }

  public async login(loginObj) {
    return await this.post(loginObj, this.url + '/authenticate');
  }

  public async doLogout() {
    return await this.post(null, this.url + '/logout');
  }

  public async resetPassword(email) {
    return await this.post(email, `${this.url}/resetPassword`);
  }

  public async sendResetPasswordEmail(email) {
    return await this.post(email, `${this.url}/resetPassword`);
  }
}
