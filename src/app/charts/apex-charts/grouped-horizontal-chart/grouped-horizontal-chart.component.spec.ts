import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedHorizontalChartComponent } from './grouped-horizontal-chart.component';

describe('GroupedHorizontalChartComponent', () => {
  let component: GroupedHorizontalChartComponent;
  let fixture: ComponentFixture<GroupedHorizontalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedHorizontalChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupedHorizontalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
