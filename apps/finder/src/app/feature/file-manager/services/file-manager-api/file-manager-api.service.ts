import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DirectoryDTO,
  FileDTO,
  FileNode,
  Stats,
  UpdateDirectoryDTO,
  UpdateFileDTO,
} from 'libs/shared/src/lib/api-dtos';

@Injectable({
  providedIn: 'root',
})
export class FileManagerApiService {
  constructor(private http: HttpClient) {}

  public getFolder() {
    return this.http.get<[]>('/api/directory/:%2FUsers%2Fmpetersen%2FmodernWebDev');
  }
  public getFileNode() {
    return this.http.get<FileNode[]>('/api/directory/filenode');
  }
  getStatsOfFile(path: string) {
    path = this.transformSlashes(path);
    return this.http.get<Stats<any>>(`/api/file/stats:${path}`);
  }
  transformSlashes(path: string) {
    return path.replace(/\//g, '%2F');
  }
  readFile(path: string) {
    return this.http.get<any>(`/api/file/:${this.transformSlashes(path)}`);
  }
  deleteFile(path: string) {
    return this.http.delete(`/api/file/:${this.transformSlashes(path)}`);
  }
  createFile(fileDTO: FileDTO) {
    return this.http.post('/api/file', fileDTO);
  }
  copyFile(fromPath: string, toPath: string) {
    return this.http.get(`/api/file/copy:${this.transformSlashes(fromPath)}:${this.transformSlashes(toPath)}`);
  }
  updateFileName(updateFileDTO: UpdateFileDTO) {
    return this.http.put('/api/file', updateFileDTO);
  }
  createDirectory(directoryDTO: DirectoryDTO) {
    return this.http.post('/api/directory', directoryDTO);
  }
  updateDirectory(updateDirectoryDTO: UpdateDirectoryDTO) {
    return this.http.put('/api/directory', updateDirectoryDTO);
  }
  deleteDirectory(path: string) {
    path = this.transformSlashes(path);
    return this.http.delete('/api/directory/:' + path);
  }
  copyDirectory(fromPath: string, toPath: string) {
    return this.http.get(`/api/directory/copy:${this.transformSlashes(fromPath)}:${this.transformSlashes(toPath)}`);
  }
  getWorkspace() {
    return this.http.get('/api/directory/workspace');
  }
}
