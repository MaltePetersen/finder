import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiEndpoints } from '../../models/api-endpoints.enum';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly host: string;
  constructor() {}
  public url(endpoint: ApiEndpoints, params: { [key: string]: any } = {}): string {
    return `${environment.api}/${this.replaceParams(endpoint, params)}`;
  }

  private replaceParams(input: string, params: { [key: string]: any } = {}): string {
    let result = input;

    Object.entries(params).map(([key, value]) => {
      result = result.replace(`{${key}}`, value);
    });

    return result;
  }
}
