import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDeatilSectionsComponent } from './job-deatil-sections.component';

describe('JobDeatilSectionsComponent', () => {
  let component: JobDeatilSectionsComponent;
  let fixture: ComponentFixture<JobDeatilSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDeatilSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDeatilSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
