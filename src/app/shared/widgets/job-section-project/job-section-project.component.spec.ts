import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSectionProjectComponent } from './job-section-project.component';

describe('JobSectionProjectComponent', () => {
  let component: JobSectionProjectComponent;
  let fixture: ComponentFixture<JobSectionProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSectionProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSectionProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
