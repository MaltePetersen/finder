import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ApiEndpoints } from '../../models/api-endpoints.enum';
import { AccessToken } from 'libs/shared/src/lib/api-dtos';
@Injectable({
  providedIn: 'root',
})
export class ApiAuthService {
  constructor(private http: HttpClient, private api: ApiService) {}

  login({ username, password }) {
    return this.http.post<AccessToken>(this.api.url(ApiEndpoints.API_GET_AUTH), { username: username, password: password });
  }
}
