import { Injectable } from '@angular/core';
import { AbstractHttpService } from './AbstractHttpService';

@Injectable()
export class RegisterService extends AbstractHttpService<any> {
  url: string = 'http://localhost:4000/users';

  public async save(dto: any) {
    return await this.post(dto, `${this.url}/register`);
  }

  public async validateToken(token: string) {
    return await this.post(null, `${this.url}/validate/token/${token}`);
  }
}
