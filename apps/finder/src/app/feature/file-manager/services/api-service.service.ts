import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FileNode } from '../../../shared/ui/tree/tree.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getFolder() {
    return this.http.get<[]>('http://localhost:3333/api/directory/:%2FUsers%2Fmpetersen%2FmodernWebDev');
    /*.pipe(
      map((data) => data.map(entry => {name: `${entry}`; type: 'folder' } ))
    )*/
  }
  public getFileNode() {
    return this.http.get<FileNode[]>('http://localhost:3333/api/directory/filenode');
  }
}
