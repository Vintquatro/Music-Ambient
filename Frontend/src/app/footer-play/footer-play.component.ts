import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-footer-play',
  templateUrl: './footer-play.component.html',
  styleUrls: ['./footer-play.component.css']
})
export class FooterPlayComponent implements OnChanges {
  @Input() selectedGenre: any;  // Ensure this is an @Input()
  currentSong: any = null;
  isPlaying: boolean = false;
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;  // Assert non-null with !

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedGenre'] && this.selectedGenre) {  // Access with correct syntax
      this.loadSongs(this.selectedGenre.id);
    }
  }

  loadSongs(genreId: number): void {
    this.apiService.getSongsByGenre(genreId).subscribe((data) => {
      if (data.length > 0) {
        this.currentSong = data[0];
        this.playAudio();
      }
    });
  }

  playAudio(): void {
    this.audioPlayer.nativeElement.play();
    this.isPlaying = true;
  }

  togglePlayPause(): void {
    if (this.isPlaying) {
      this.audioPlayer.nativeElement.pause();
    } else {
      this.audioPlayer.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  backwardSkip(): void {
    console.log('Skipping backward...');
  }

  forwardSkip(): void {
    console.log('Skipping forward...');
  }

  getSongUrl(filePath: string): string {
    return filePath.startsWith('http') ? filePath : `http://localhost:3000${filePath}`;
  }
}
