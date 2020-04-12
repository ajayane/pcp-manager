import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSectionLogisticsComponent } from './job-section-logistics.component';

describe('JobSectionLogisticsComponent', () => {
  let component: JobSectionLogisticsComponent;
  let fixture: ComponentFixture<JobSectionLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSectionLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSectionLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
