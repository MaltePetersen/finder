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
    this.getDirectoryContent(this.getWorkspace());
  }

  private fileNode$$ = new BehaviorSubject<FileNode[]>(null);
  public fileNode$ = this.fileNode$$.asObservable();
  async readDirectory(path: string): Promise<string[]> {
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

  private async getDirectoryContent(path: string) {
    const content = await this.readDirectory(path);
    let fileNodes = await this.constructNodes(path, content);
    console.log(JSON.stringify(await this.extractDirectoryContent(fileNodes, path), null, 1));
  }

  private async extractDirectoryContent(content: FileNode[], path: string): Promise<any> {
    let fileNode = await Promise.all(
      content.map(async (node) => {
        if (node.type === 'folder') {
          let nodes = await this.constructNodes(
            path + '/' + node.name,
            await this.readDirectory(`${path}/${node.name}`)
          );
          node.children = nodes;
          await this.extractDirectoryContent(node.children, `${path}/${node.name}`);
          return node;
        } else {
          return node;
        }
      })
    );
    return fileNode;
  }

  private async constructNodes(path: string, content: any): Promise<FileNode[]> {
    let fileNodes = new Array<FileNode>();
    fileNodes = await Promise.all(
      content.map(async (data) => {
        let a = await { name: data, type: await this.isFolder(path, data), children: [] };
        return Promise.resolve(a);
      })
    );
    return fileNodes;
  }

  private async isFolder(path: string, name: string) {
    if ((await stat(path + '/' + name)).isDirectory()) {
      return 'folder';
    } else {
      return 'file';
    }
  }
}
