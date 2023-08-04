import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseValueAxisComponent } from './reverse-value-axis.component';

describe('ReverseValueAxisComponent', () => {
  let component: ReverseValueAxisComponent;
  let fixture: ComponentFixture<ReverseValueAxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseValueAxisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseValueAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
