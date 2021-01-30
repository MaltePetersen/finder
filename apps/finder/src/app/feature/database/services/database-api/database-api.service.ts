import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from 'apps/finder/src/app/shared/models/api-endpoints.enum';
import { ApiService } from 'apps/finder/src/app/shared/services/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseApiService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  getAllCollections() {
    return this.http.get(this.apiService.url(ApiEndpoints.API_GET_COLLECTIONS));
  }
  getCollection(colname: string): Observable<Array<any>> {
    return this.http.get<[]>(this.apiService.url(ApiEndpoints.API_GET_COLLECTION, { colname: colname }));
  }
  createCollection(colname: string) {
    return this.http.post(this.apiService.url(ApiEndpoints.API_POST_COLLECTION), { name: colname });
  }
  deleteCollection(colname: string) {
    return this.http.delete(this.apiService.url(ApiEndpoints.API_DELETE_COLLECTION, { colname: colname }));
  }
  updateCollection(colname: string, newColName: string) {
    return this.http.put(this.apiService.url(ApiEndpoints.API_PUT_COLLECTION), { name: colname, newName: newColName });
  }

  createEntry(entry: Object, colname: string) {
    return this.http.post(this.apiService.url(ApiEndpoints.API_POST_ENTRY, { colname: colname }), entry);
  }

  updateEntry(entry: Object, colname: string, id: string) {
    return this.http.put(this.apiService.url(ApiEndpoints.API_PUT_ENTRY, { colname: colname, id: id }), entry);
  }

  deleteEntry(colname: string, id: string) {
    return this.http.delete(this.apiService.url(ApiEndpoints.API_DELETE_ENTRY, { colname: colname, id: id }));
  }
}
