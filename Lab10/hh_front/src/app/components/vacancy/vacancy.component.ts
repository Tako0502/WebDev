import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  topVacancies: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadTopVacancies();
  }

  loadTopVacancies(): void {
    this.apiService.getTopVacancies().subscribe(
      (data) => {
        this.topVacancies = data;
      },
      (error) => {
        console.error('Error loading top vacancies:', error);
      }
    );
  }
} 