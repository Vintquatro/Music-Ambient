import { Component, OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genres: any[] = [];
  selectedGenre: any = null;
  images: any[] = [];
  currentImage: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGenres().subscribe((data) => {
      this.genres = data;
    });

    // Initialize particles

    particlesJS.load('particles-js', 'assets/particles.json', function() {
      alert('particles.js loaded - callback');
      console.log('particles.js loaded - callback');
    });
  }
  

  onGenreChanged(event: any): void {
    this.selectedGenre = event.genre;
    this.currentImage = event.image;
  }

  getImageUrl(filePath: string): string {
    return filePath.startsWith('http') ? filePath : `http://localhost:3000${filePath}`;
  }
}