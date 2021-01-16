import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDemandComponent } from './stat-demand.component';

describe('StatDemandComponent', () => {
  let component: StatDemandComponent;
  let fixture: ComponentFixture<StatDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
