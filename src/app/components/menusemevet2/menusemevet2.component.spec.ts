import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menusemevet2Component } from './menusemevet2.component';

describe('Menusemevet2Component', () => {
  let component: Menusemevet2Component;
  let fixture: ComponentFixture<Menusemevet2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menusemevet2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menusemevet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
