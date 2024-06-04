import { Component, OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';

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
  }

  onGenreChange(event: any): void {
    const genreId = event.target.value;
    this.selectedGenre = this.genres.find(genre => genre.id == genreId);
    console.log('Selected Genre:', this.selectedGenre);

    this.apiService.getImagesByGenre(genreId).subscribe((data) => {
      this.images = data;
      if (this.images.length > 0) {
        this.currentImage = this.images[0];
      }
      console.log('Fetched Images:', this.images);
    });
  }

  getImageUrl(filePath: string): string {
    return filePath.startsWith('http') ? filePath : `http://localhost:3000${filePath}`;
  }
}


