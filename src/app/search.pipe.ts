import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(clients: any, term: any): any {
    if(term === undefined){
      return clients;
    }

    return clients.filter((client) => {
      let clientName = client.general.firstName + ' ' + client.general.lastName
      return clientName.toLowerCase().includes(term.toLowerCase());
    })
  }

}
