import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-genre-selector',
  templateUrl: './genre-selector.component.html',
  styleUrls: ['./genre-selector.component.css']
})
export class GenreSelectorComponent implements OnInit{
  @Input() selectedGenre: any;
  genres: any[] = [];
  images: any[] = [];
  currentImage: any = null;

  @Output() genreChanged = new EventEmitter<any>();

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

      // Emit the selected genre and image to the parent component
      this.genreChanged.emit({ genre: this.selectedGenre, image: this.currentImage });
    });
  }

  getImageUrl(filePath: string): string {
    return filePath.startsWith('http') ? filePath : `http://localhost:3000${filePath}`;
  }
}