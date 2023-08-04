import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBarVerticalComponent } from './stacked-bar-vertical.component';

describe('StackedBarVerticalComponent', () => {
  let component: StackedBarVerticalComponent;
  let fixture: ComponentFixture<StackedBarVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedBarVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedBarVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
