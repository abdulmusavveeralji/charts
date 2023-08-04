import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmPieComponent } from './am-pie.component';

describe('AmPieComponent', () => {
  let component: AmPieComponent;
  let fixture: ComponentFixture<AmPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
