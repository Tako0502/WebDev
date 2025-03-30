import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Albums</h2>
    <div class="albums-list">
      <div *ngFor="let album of albums" class="album-item">
        <span (click)="onAlbumClick(album.id)">{{ album.title }}</span>
        <button (click)="deleteAlbum(album.id)">Delete</button>
      </div>
    </div>
  `,
  styles: [`
    .albums-list {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    .album-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      margin: 10px 0;
      background-color: #f5f5f5;
      border-radius: 5px;
    }

    span {
      cursor: pointer;
    }

    span:hover {
      color: #007bff;
    }

    button {
      padding: 5px 10px;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }

    button:hover {
      background-color: #c82333;
    }
  `]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(
      albums => {
        console.log(albums);
        this.albums = albums;
      }
    );
  }

  onAlbumClick(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
} 