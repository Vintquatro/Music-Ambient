import { Component, OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
  styles: []
})
export class AppComponent implements OnInit {
  message = 'Loading...';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.testConnection().subscribe(
      (response) => {
        this.message = response.message;
      },
      (error) => {
        this.message = 'Error connecting to backend!';
      }
    );
  }
}
