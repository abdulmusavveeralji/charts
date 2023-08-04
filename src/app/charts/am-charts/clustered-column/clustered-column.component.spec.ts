import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusteredColumnComponent } from './clustered-column.component';

describe('ClusteredColumnComponent', () => {
  let component: ClusteredColumnComponent;
  let fixture: ComponentFixture<ClusteredColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusteredColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClusteredColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
