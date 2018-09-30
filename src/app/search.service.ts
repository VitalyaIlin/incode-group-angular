import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {

  searchQuery = new Subject<string>();

  constructor() { }

}
