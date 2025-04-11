import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: any[] = [];
  selectedCompany: any = null;
  companyVacancies: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.apiService.getCompanies().subscribe(
      (data) => {
        this.companies = data;
      },
      (error) => {
        console.error('Error loading companies:', error);
      }
    );
  }

  selectCompany(company: any): void {
    this.selectedCompany = company;
    this.loadCompanyVacancies(company.id);
  }

  loadCompanyVacancies(companyId: number): void {
    this.apiService.getCompanyVacancies(companyId).subscribe(
      (data) => {
        this.companyVacancies = data;
      },
      (error) => {
        console.error('Error loading company vacancies:', error);
      }
    );
  }
} 