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
export type FileNode = { path: string; name: string; type: string; children?: FileNode[] };
export type Stats<T> = {
  dev: T;
  ino: T;
  mode: T;
  nlink: T;
  uid: T;
  gid: T;
  rdev: T;
  size: T;
  blksize: T;
  blocks: T;
  atimeMs: T;
  mtimeMs: T;
  ctimeMs: T;
  birthtimeMs: T;
  atime: Date;
  mtime: Date;
  ctime: Date;
  birthtime: Date;
};
