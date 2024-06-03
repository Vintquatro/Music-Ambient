import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Your backend API URL

  constructor(private http: HttpClient) { }

  getSongsByGenre(genreId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/songs/genre/${genreId}`);
  }

  getImagesByGenre(genreId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/images/genre/${genreId}`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/genres`);
  }
}
