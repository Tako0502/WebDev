import { Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';

export const routes: Routes = [
  { path: 'companies', component: CompanyComponent },
  { path: 'vacancies', component: VacancyComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' }
];
