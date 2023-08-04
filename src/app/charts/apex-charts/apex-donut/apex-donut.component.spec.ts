import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexDonutComponent } from './apex-donut.component';

describe('ApexDonutComponent', () => {
  let component: ApexDonutComponent;
  let fixture: ComponentFixture<ApexDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexDonutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
