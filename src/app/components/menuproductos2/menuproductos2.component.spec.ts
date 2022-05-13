import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuproductos2Component } from './menuproductos2.component';

describe('Menuproductos2Component', () => {
  let component: Menuproductos2Component;
  let fixture: ComponentFixture<Menuproductos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menuproductos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menuproductos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
