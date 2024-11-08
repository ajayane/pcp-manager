import { JobDetailComponent } from './modules/jobs/job-detail/job-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { JobsComponent } from './modules/jobs/jobs.component';
import { ReportsComponent } from './modules/reports/reports.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
      {
        path: 'job/:id',
        component: JobDetailComponent
      },
      {
        path: 'reports',
        component: ReportsComponent,

      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
