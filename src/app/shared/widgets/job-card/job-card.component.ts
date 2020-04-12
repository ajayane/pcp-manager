import { JobService, Job } from './../../../modules/job.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-widget-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  job$: Observable<Job>;
  constructor(private route: ActivatedRoute, private router: Router, private service: JobService) { }

  ngOnInit(): void {
    this.job$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getJob(params.get('id'))
      ));
  }

}
