export class DirectoryDTO {
  name: string;
  path: string;
}
export class UpdateDirectoryDTO {
  name: string;
  path: string;
  newName: string;
}
export class FileDTO {
  name: string;
  path: string;
}
export class UpdateFileDTO {
  name: string;
  path: string;
  newName: string;
}
export type FileNode = { name: string; type: string; children: FileNode[] };
