import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaDisplayComponent } from './media-display/media-display.component';
import { GenreSelectorComponent } from './genre-selector/genre-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaDisplayComponent,
    GenreSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule here
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
