import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileNode, Stats } from 'libs/shared/src/lib/api-dtos';

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
  getStatsOfFile(path: string) {
    path = this.transformSlashes(path);
    console.log(path);
    return this.http.get<Stats<any>>(`http://localhost:3333/api/file/stats:${path}`);
  }
  transformSlashes(path: string) {
    return path.replace(/\//g, '%2F');
  }
  readFile(path: string) {
    return this.http.get<any>(`http://localhost:3333/api/file/:${this.transformSlashes(path)}`);
  }
  deleteFile(path: string) {
    return this.http.delete(`http://localhost:3333/api/file/:${this.transformSlashes(path)}`);
  }
}
