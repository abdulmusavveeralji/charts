import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexPieComponent } from './apex-pie.component';

describe('ApexPieComponent', () => {
  let component: ApexPieComponent;
  let fixture: ComponentFixture<ApexPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
