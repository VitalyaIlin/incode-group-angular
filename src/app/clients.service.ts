import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientsService {

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get('../assets/clients.json');
  }
}
