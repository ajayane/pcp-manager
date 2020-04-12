import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSectionDesignComponent } from './job-section-design.component';

describe('JobSectionDesignComponent', () => {
  let component: JobSectionDesignComponent;
  let fixture: ComponentFixture<JobSectionDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSectionDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSectionDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
