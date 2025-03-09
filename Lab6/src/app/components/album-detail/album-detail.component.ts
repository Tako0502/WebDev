import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div *ngIf="album">
      <h2>Album Detail</h2>
      <input [(ngModel)]="album.title" placeholder="Album title">
      <button (click)="saveAlbum()">Save</button>
      <button (click)="goBack()">Return</button>
      <button (click)="goToPhotos()">Photos</button>
    </div>
  `,
  styles: [`
    div {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    input {
      padding: 8px;
      margin: 10px 0;
      width: 100%;
      max-width: 300px;
    }

    button {
      margin: 5px;
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbum(id).subscribe(
      album => {
        this.album = album;
        console.log(album);
      }
    );
  }

  saveAlbum(): void {
    if (this.album) {
      this.albumsService.updateAlbum(this.album).subscribe();
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
} 