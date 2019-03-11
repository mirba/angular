import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 {path: 'departments', component: DepartmentListComponent},
 {path: 'departments/:id', component: DepartmentDetailComponent},
 {path: 'employees', component: EmployeeListComponent},
 {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [DepartmentListComponent, 
								EmployeeListComponent, 
								DepartmentDetailComponent, 
								PageNotFoundComponent]; 
