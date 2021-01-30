import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from 'apps/finder/src/app/shared/models/api-endpoints.enum';
import { ApiService } from 'apps/finder/src/app/shared/services/api/api.service';
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
  constructor(private http: HttpClient, private apiService: ApiService) {}

  public getFileNode() {
    return this.http.get<FileNode[]>(this.apiService.url(ApiEndpoints.API_GET_DIR_FILENODE));
    return this.http.get<FileNode[]>('/api/directory/filenode');
  }
  getStatsOfFile(path: string) {
    path = this.transformSlashes(path);
    return this.http.get<Stats<any>>(this.apiService.url(ApiEndpoints.API_GET_STATS, { path: path }));
    return this.http.get<Stats<any>>(`/api/file/stats:${path}`);
  }
  transformSlashes(path: string) {
    return path.replace(/\//g, '%2F');
  }
  readFile(path: string) {
    return this.http.get<any>(this.apiService.url(ApiEndpoints.API_GET_FILE, { path: this.transformSlashes(path) }));
    return this.http.get<any>(`/api/file/:${this.transformSlashes(path)}`);
  }
  deleteFile(path: string) {
    return this.http.delete(this.apiService.url(ApiEndpoints.API_DELETE_FILE, { path: this.transformSlashes(path) }));
    return this.http.delete(`/api/file/:${this.transformSlashes(path)}`);
  }
  createFile(fileDTO: FileDTO) {
    return this.http.post(this.apiService.url(ApiEndpoints.API_POST_FILE), fileDTO);
    return this.http.post('/api/file', fileDTO);
  }
  copyFile(fromPath: string, toPath: string) {
    return this.http.get(
      this.apiService.url(ApiEndpoints.API_GET_FILE_COPY, {
        from: this.transformSlashes(fromPath),
        to: this.transformSlashes(toPath),
      })
    );
    return this.http.get(`/api/file/copy:${this.transformSlashes(fromPath)}:${this.transformSlashes(toPath)}`);
  }
  updateFileName(updateFileDTO: UpdateFileDTO) {
    return this.http.put(this.apiService.url(ApiEndpoints.API_PUT_FILE), updateFileDTO);
    return this.http.put('/api/file', updateFileDTO);
  }
  createDirectory(directoryDTO: DirectoryDTO) {
    return this.http.post(this.apiService.url(ApiEndpoints.API_POST_DIR), directoryDTO);
    return this.http.post('/api/directory', directoryDTO);
  }
  updateDirectory(updateDirectoryDTO: UpdateDirectoryDTO) {
    return this.http.put(this.apiService.url(ApiEndpoints.API_PUT_DIR), updateDirectoryDTO);
    return this.http.put('/api/directory', updateDirectoryDTO);
  }
  deleteDirectory(path: string) {
    path = this.transformSlashes(path);
    return this.http.delete(this.apiService.url(ApiEndpoints.API_DELETE_DIR, { path: path }));
    return this.http.delete('/api/directory/:' + path);
  }
  copyDirectory(fromPath: string, toPath: string) {
    return this.http.get(
      this.apiService.url(ApiEndpoints.API_GET_DIR_COPY, {
        from: this.transformSlashes(fromPath),
        to: this.transformSlashes(toPath),
      })
    );
    return this.http.get(`/api/directory/copy:${this.transformSlashes(fromPath)}:${this.transformSlashes(toPath)}`);
  }
  getWorkspace() {
    return this.http.get(this.apiService.url(ApiEndpoints.API_GET_WORKSPACE));
    return this.http.get('/api/directory/workspace');
  }
}
