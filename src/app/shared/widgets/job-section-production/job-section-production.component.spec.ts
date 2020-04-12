import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSectionProductionComponent } from './job-section-production.component';

describe('JobSectionProductionComponent', () => {
  let component: JobSectionProductionComponent;
  let fixture: ComponentFixture<JobSectionProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSectionProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSectionProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
