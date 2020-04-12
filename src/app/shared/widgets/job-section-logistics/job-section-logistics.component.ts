import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JobService, Job } from './../../../modules/job.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-widget-job-section-logistics',
  templateUrl: './job-section-logistics.component.html',
  styleUrls: ['./job-section-logistics.component.scss']
})
export class JobSectionLogisticsComponent implements OnInit {
  job$: Observable<Job>;
  constructor(private route: ActivatedRoute, private router: Router, public service: JobService) { }

  ngOnInit(): void {
    this.job$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getJob(params.get('id'))
      ));
  }

}
