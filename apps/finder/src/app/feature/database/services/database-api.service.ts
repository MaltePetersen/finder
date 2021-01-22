import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseApiService {
  path = (path: string) => `api/database-handling/${path}`;

  constructor(private http: HttpClient) {}

  getAllCollections() {
    return this.http.get(this.path('collections'));
  }
  getCollection(colname: string): Observable<Array<any>> {
    return this.http.get<[]>(this.path(`collection:${colname}`));
  }
  createCollection(colname: string) {
    return this.http.post(this.path(`collection`), { name: colname });
  }
  deleteCollection(colname: string) {
    return this.http.delete(this.path(`collection:${colname}`));
  }
  updateCollection(colname: string, newColName: string) {
    return this.http.put(this.path(`collection`), { name: colname, newName: newColName });
  }

  createEntry(entry: Object, colname: string) {
    return this.http.post(this.path(`collection:${colname}/entry`), entry);
  }

  updateEntry(entry: Object, colname: string, id: string) {
    return this.http.put(this.path(`collection:${colname}/entry:${id}`), entry);
  }

  deleteEntry(colname: string, id: string) {
    return this.http.delete(this.path(`collection:${colname}/entry:${id}`));
  }
}
