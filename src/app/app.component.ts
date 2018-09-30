import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clients: {[k: string]: any};
  clientData: Object = {};
  searchTerm: string;
  showDetails: boolean = false;

  constructor(private cs: ClientsService, private searchService: SearchService){}
  
  ngOnInit(){
    this.cs.getClients().subscribe(
      (data) => {
        this.clients = data;
      }
    )

    this.searchService.searchQuery.subscribe(
      (data) => {
        this.searchTerm = data;
      }
    )
  }

  showClientDetail(client){
    this.showDetails = true;
    this.clientData = client;
  }


}
