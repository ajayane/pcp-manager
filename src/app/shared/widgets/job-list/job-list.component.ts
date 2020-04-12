import { JobService } from './../../../modules/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  // ongoingJobs;
  constructor(public service: JobService) { }

  ngOnInit(): void {
    // this.ongoingJobs = service.
  }

}
