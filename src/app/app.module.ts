import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ClientsService } from './clients.service';
import { SearchService } from './search.service';
import 'hammerjs';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    ClientsService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
