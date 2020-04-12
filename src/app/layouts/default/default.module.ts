import { JobDetailComponent } from './../../modules/jobs/job-detail/job-detail.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from 'src/app/modules/jobs/jobs.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    JobsComponent,
    JobDetailComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
  ],
  providers: []
})
export class DefaultModule { }
