import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from 'apps/finder/src/app/shared/models/api-endpoints.enum';
import { ApiService } from 'apps/finder/src/app/shared/services/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseApiService {
  path = (path: string) => `api/database-handling/${path}`;

  constructor(private http: HttpClient, private apiService: ApiService) {}

  getAllCollections() {
    return this.http.get(this.apiService.url(ApiEndpoints.API_GET_COLLECTIONS));
    return this.http.get(this.path('collections'));
  }
  getCollection(colname: string): Observable<Array<any>> {
    return this.http.get<[]>(this.apiService.url(ApiEndpoints.API_GET_COLLECTION, { colname: colname }));
    return this.http.get<[]>(this.path(`collection:${colname}`));
  }
  createCollection(colname: string) {
    return this.http.post(this.apiService.url(ApiEndpoints.API_POST_COLLECTION), { name: colname });
    return this.http.post(this.path(`collection`), { name: colname });
  }
  deleteCollection(colname: string) {
    return this.http.delete(this.apiService.url(ApiEndpoints.API_DELETE_COLLECTION, { colname: colname }));
    return this.http.delete(this.path(`collection:${colname}`));
  }
  updateCollection(colname: string, newColName: string) {
    return this.http.put(this.apiService.url(ApiEndpoints.API_PUT_COLLECTION), { name: colname, newName: newColName });
    return this.http.put(this.path(`collection`), { name: colname, newName: newColName });
  }

  createEntry(entry: Object, colname: string) {
    return this.http.post(this.apiService.url(ApiEndpoints.API_POST_ENTRY, { colname: colname }), entry);
    return this.http.post(this.path(`collection:${colname}/entry`), entry);
  }

  updateEntry(entry: Object, colname: string, id: string) {
    return this.http.put(this.apiService.url(ApiEndpoints.API_PUT_ENTRY, { colname: colname, id: id }), entry);
    return this.http.put(this.path(`collection:${colname}/entry:${id}`), entry);
  }

  deleteEntry(colname: string, id: string) {
    return this.http.delete(this.apiService.url(ApiEndpoints.API_DELETE_ENTRY, { colname: colname, id: id }));
    return this.http.delete(this.path(`collection:${colname}/entry:${id}`));
  }
}
