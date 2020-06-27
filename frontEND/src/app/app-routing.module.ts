import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { DepartmentListComponent } from './department-list/department-list.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

import { SupervisorListComponent } from './supervisor-list/supervisor-list.component';
import { CreateSupervisorComponent } from './create-supervisor/create-supervisor.component';
// import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { SupervisorDetailsComponent } from './supervisor-details/supervisor-details.component';

import { SalaryListComponent } from './salary-list/salary-list.component';
import { CreateSalaryComponent } from './create-salary/create-salary.component';
// import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';

import { ParentListComponent } from './parent-list/parent-list.component';
import { CreateParentComponent } from './create-parent/create-parent.component';
import { UpdateParentComponent } from './update-parent/update-parent.component';
import { ParentDetailsComponent } from './parent-details/parent-details.component';

const routes: Routes = [

  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },

  { path: 'department', component: DepartmentListComponent },
  { path: 'department/add', component: CreateDepartmentComponent },
  { path: 'department/update/:id', component: UpdateDepartmentComponent },
  { path: 'department/details/:id', component: DepartmentDetailsComponent },

  { path: 'supervisor', component: SupervisorListComponent },
  { path: 'supervisor/add', component: CreateSupervisorComponent },
  // { path: 'department/update/:id', component: UpdateDepartmentComponent },
  { path: 'supervisor/details/:id', component: SupervisorDetailsComponent },

  { path: 'salary', component: SalaryListComponent },
  { path: 'salary/add', component: CreateSalaryComponent },
  // { path: 'department/update/:id', component: UpdateDepartmentComponent },
  { path: 'salary/details/:id', component: SalaryDetailsComponent },

  { path: 'parents', component: ParentListComponent },
  { path: 'parent/add', component: CreateParentComponent },
  { path: 'parent/update/:id', component: UpdateParentComponent },
  { path: 'parent/details/:id', component: ParentDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
