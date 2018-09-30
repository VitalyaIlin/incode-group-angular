import { Component, OnInit, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: Subject<string>;
  constructor(private searchService: SearchService) {
    this.searchQuery = this.searchService.searchQuery;
  }

  ngOnInit() {
  }

}
