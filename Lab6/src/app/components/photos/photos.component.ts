import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="photos-container">
      <h2>Album Photos</h2>
      <button class="return-button" (click)="goBack()">Return</button>
      
      <div class="photos-grid">
        <div *ngFor="let photo of photos" class="photo-item">
          <img [src]="photo.url" [alt]="photo.title">
          <p>{{ photo.title }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .photos-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .return-button {
      margin: 20px 0;
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .return-button:hover {
      background-color: #0056b3;
    }

    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px 0;
    }

    .photo-item {
      background: #f5f5f5;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .photo-item img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }

    .photo-item p {
      margin: 10px 0;
      font-size: 14px;
      color: #333;
      text-align: center;
    }
  `]
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(albumId).subscribe(
      photos => {
        this.photos = photos;
        console.log('Loaded photos:', photos);
      }
    );
  }

  goBack(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/albums', albumId]);
  }
} 