import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';




import { WeekAnalysisComponent } from './widgets/week-analysis/week-analysis.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ProjectStatusComponent } from './widgets/project-status/project-status.component';
import { CardComponent } from './widgets/card/card.component';
import { JobListComponent } from './widgets/job-list/job-list.component';
import { JobCardComponent } from './widgets/job-card/job-card.component';
import { JobDeatilSectionsComponent } from './widgets/job-deatil-sections/job-deatil-sections.component';
import { ReportsComponent } from '../modules/reports/reports.component';
import { JobAnalyticsComponent } from './widgets/job-analytics/job-analytics.component';
import { JobSectionDesignComponent } from './widgets/job-section-design/job-section-design.component';
import { JobSectionProductionComponent } from './widgets/job-section-production/job-section-production.component';
import { JobSectionLogisticsComponent } from './widgets/job-section-logistics/job-section-logistics.component';
import { JobSectionProjectComponent } from './widgets/job-section-project/job-section-project.component';





@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    WeekAnalysisComponent,
    ProjectStatusComponent,
    CardComponent,
    JobListComponent,
    JobCardComponent,
    JobDeatilSectionsComponent,
    ReportsComponent,
    JobAnalyticsComponent,
    JobSectionDesignComponent,
    JobSectionProductionComponent,
    JobSectionLogisticsComponent,
    JobSectionProjectComponent,

  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    HighchartsChartModule,
    MatFormFieldModule,
    MatPaginatorModule

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    WeekAnalysisComponent,
    ProjectStatusComponent,
    JobListComponent,
    JobCardComponent,
    JobDeatilSectionsComponent,
    ReportsComponent,
    JobAnalyticsComponent,
    JobSectionDesignComponent,
    JobSectionProductionComponent,
    JobSectionLogisticsComponent,
    JobSectionProjectComponent,


  ]
})
export class SharedModule { }
