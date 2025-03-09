import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home-container">
      <h1>Welcome to Our Album Gallery</h1>
      <div class="content">
        <p>This is your homepage for the Album Gallery application.</p>
        <p>You can:</p>
        <ul>
          <li>Browse our collection of albums</li>
          <li>View detailed information about each album</li>
        </ul>
        <div class="navigation-links">
          <a routerLink="/albums" class="nav-button">View Albums</a>
          <a routerLink="/about" class="nav-button">About Us</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    h1 {
      color: #333;
      text-align: center;
      margin-bottom: 30px;
    }
    
    .content {
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    ul {
      margin: 20px 0;
      padding-left: 20px;
    }
    
    li {
      margin: 10px 0;
    }
    
    .navigation-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
    }
    
    .nav-button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }
    
    .nav-button:hover {
      background-color: #0056b3;
    }
  `]
})
export class HomeComponent {} 