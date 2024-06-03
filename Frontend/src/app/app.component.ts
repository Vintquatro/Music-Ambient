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
  songs: any[] = [];
  currentSong: any = null; // Track the current song
  images: any[] = [];
  currentImage: any = null; // Track the current image
  isPlaying: boolean = false;

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

    // Fetch songs for the selected genre
    this.apiService.getSongsByGenre(genreId).subscribe((data) => {
      this.songs = data;
      if (this.songs.length > 0) {
        this.currentSong = this.songs[0];
      }
      console.log('Fetched Songs:', this.songs);
    });

    // Fetch images for the selected genre
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

  getSongUrl(filePath: string): string {
    return filePath.startsWith('http') ? filePath : `http://localhost:3000${filePath}`;
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      console.log('Playing...');
    } else {
      console.log('Pausing...');
    }
  }

  backwardSkip() {
    console.log('Skipping backward...');
  }

  forwardSkip() {
    console.log('Skipping forward...');
  }
}


