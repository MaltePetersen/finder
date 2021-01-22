import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../../services/database-api.service';
@Component({
  selector: 'finder-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
})
export class DatabaseComponent implements OnInit {
  constructor(private databaseApiService: DatabaseApiService) {}
  ngOnInit(): void {}
}
