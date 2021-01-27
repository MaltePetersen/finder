import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { FlatTreeNode } from '../../model/flattreenode.interface';
import { CurrentFileService } from '../../services/currentFile/current-file.service';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'finder-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  @Input() set files(value: FileNode[]) {
    if (value) {
      this.dataSource.data = value;
    }
  }

  isLoading = true;
  treeControl: FlatTreeControl<FlatTreeNode>;

  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;

  dataSource: MatTreeFlatDataSource<FileNode, FlatTreeNode>;
  dialogConfig = new MatDialogConfig();

  constructor(private dialog: MatDialog, private currentFileService: CurrentFileService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
  }
  create() {
    this.dialog.open(CreateComponent, this.dialogConfig);
  }

  transformer(node: FileNode, level: number) {
    return {
      name: node.name,
      type: node.type,
      level: level,
      path: node.path,
      expandable: !!node.children,
    };
  }

  getLevel(node: FlatTreeNode) {
    return node.level;
  }

  isExpandable(node: FlatTreeNode) {
    return node.expandable;
  }

  hasChild(index: number, node: FlatTreeNode) {
    return node.expandable;
  }

  /** Get the children for the node. */
  getChildren(node: FileNode): FileNode[] | null | undefined {
    return node.children;
  }
  clicked(node: FileNode) {
    this.currentFileService.updateCurrentFile(node);
  }
}
