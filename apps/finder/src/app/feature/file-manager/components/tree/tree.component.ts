import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FileNode } from 'libs/shared/src/lib/api-dtos';
import { tap } from 'rxjs/operators';
import { CurrentFileService } from '../../services/currentFile/current-file.service';
import { FileNodeService } from '../../services/filenode/filenode.service';
import { CreateComponent } from './create/create.component';

export interface FlatTreeNode {
  name: string;
  type: string;
  path: string;
  level: number;
  expandable: boolean;
}

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
  /** The TreeControl controls the expand/collapse state of tree nodes.  */
  treeControl: FlatTreeControl<FlatTreeNode>;

  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;

  /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
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

  /** Transform the data to something the tree can read. */
  transformer(node: FileNode, level: number) {
    return {
      name: node.name,
      type: node.type,
      level: level,
      path: node.path,
      expandable: !!node.children,
    };
  }

  /** Get the level of the node */
  getLevel(node: FlatTreeNode) {
    return node.level;
  }

  /** Get whether the node is expanded or not. */
  isExpandable(node: FlatTreeNode) {
    return node.expandable;
  }

  /** Get whether the node has children or not. */
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
