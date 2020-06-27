import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';

import { CreateSalaryComponent } from './create-salary/create-salary.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
// import { UpdateDepartmentComponent } from './update-department/update-department.component';

import { CreateSupervisorComponent } from './create-supervisor/create-supervisor.component';
import { SupervisorDetailsComponent } from './supervisor-details/supervisor-details.component';
import { SupervisorListComponent } from './supervisor-list/supervisor-list.component';
// import { UpdateDepartmentComponent } from './update-department/update-department.component';

import { CreateParentComponent } from './create-parent/create-parent.component';
import { ParentDetailsComponent } from './parent-details/parent-details.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { UpdateParentComponent } from './update-parent/update-parent.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CreateDepartmentComponent,
    DepartmentDetailsComponent,
    DepartmentListComponent,
    UpdateDepartmentComponent,
    CreateSalaryComponent,
    SalaryDetailsComponent,
    SalaryListComponent,
    // UpdateDepartmentComponent,
    CreateSupervisorComponent,
    SupervisorDetailsComponent,
    SupervisorListComponent,
    // UpdateDepartmentComponent
    CreateParentComponent,
    ParentDetailsComponent,
    ParentListComponent,
    UpdateParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
