import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekAnalysisComponent } from './week-analysis.component';

describe('WeekAnalysisComponent', () => {
  let component: WeekAnalysisComponent;
  let fixture: ComponentFixture<WeekAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
