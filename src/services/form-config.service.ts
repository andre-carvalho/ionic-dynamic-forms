import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FormConfigService {
  readonly BASEURL = 'http://localhost:8100/assets/forms/';

  constructor(private http: Http) { }

  public getFormConfig(filename) {
    return this.http.get(this.BASEURL + filename);
  }


}
