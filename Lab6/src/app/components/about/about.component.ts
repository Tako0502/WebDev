import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="about-container">
      <h1>About Us</h1>
      <div class="content">
        <p>Welcome to our Album Gallery application! We are passionate about helping you organize and view your photo collections.</p>
        
        <h2>Our Mission</h2>
        <p>Our mission is to provide a simple and elegant way to manage and showcase your digital photo albums.</p>
        
        <h2>Features</h2>
        <ul>
          <li>Easy album organization</li>
          <li>Beautiful photo displays</li>
          <li>Intuitive navigation</li>
          <li>Fast and responsive design</li>
        </ul>

        <div class="navigation-links">
          <a routerLink="/" class="nav-button">Home</a>
          <a routerLink="/albums" class="nav-button">View Albums</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    h1, h2 {
      color: #333;
      margin-bottom: 20px;
    }

    h1 {
      text-align: center;
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
export class AboutComponent {} 