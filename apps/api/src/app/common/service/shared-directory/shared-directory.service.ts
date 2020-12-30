import { FileNode } from '@finder/shared';
import { Injectable } from '@nestjs/common';
import { environment } from 'apps/api/src/environments/environment.prod';
import { fstat } from 'fs';
import { copySync } from 'fs-extra';
import { BehaviorSubject, Observable } from 'rxjs';
const { mkdir, readdir, rename, rmdir, stat } = require('fs').promises;

@Injectable()
export class SharedDirectoryService {
  constructor() {
    this.constructFileNode();
  }
  private fileNode$$ = new BehaviorSubject<FileNode[]>(null);
  public fileNode$ = this.fileNode$$.asObservable();
  async readDirectory(path: string): Promise<any> {
    return readdir(path);
  }

  public constructPath(path: string, file: string): string {
    return `${path}/${file}`;
  }
  public getWorkspace() {
    return (
      environment.workspace.substring(0, 7) + require('os').userInfo().username + environment.workspace.substring(12)
    );
  }
  public async constructFileNode() {
    let fileNodes = new Array();

    const content = await this.readDirectory(this.getWorkspace());
    await Promise.all(
      content.map(async (name) => {
        if ((await stat(this.getWorkspace() + '/' + name)).isDirectory()) {
          let fileNode = { name: name, type: 'folder', children: [] };
          let currentPath = this.getWorkspace() + '/' + fileNode.name;
          fileNodes.push(await this.recursiveFileNodeAssembling(fileNode, currentPath));
        } else {
          fileNodes.push({ name: name, type: 'file', children: [] });
        }
      })
    );
    console.log(fileNodes);
  }
  private async recursiveFileNodeAssembling(fileNode: FileNode, currentPath: string): Promise<FileNode> {
    const content = await this.readDirectory(currentPath);
    await content.map(async (name) => {
      if ((await stat(currentPath + '/' + name)).isDirectory()) {
        let newFileNode = { name: name, type: 'folder', children: [] };
        currentPath = currentPath + '/' + name;
        newFileNode = await this.recursiveFileNodeAssembling(newFileNode, currentPath);
        fileNode.children.push(newFileNode);
        console.log(fileNode);
        return Promise.resolve(fileNode);
      } else {
        return Promise.resolve(fileNode);
      }
    });
    return Promise.resolve(fileNode);
  }
}
