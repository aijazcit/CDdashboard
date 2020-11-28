import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesampleComponent } from './routesample.component';

describe('RoutesampleComponent', () => {
  let component: RoutesampleComponent;
  let fixture: ComponentFixture<RoutesampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
