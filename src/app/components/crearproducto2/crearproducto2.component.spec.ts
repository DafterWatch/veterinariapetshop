import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crearproducto2Component } from './crearproducto2.component';

describe('Crearproducto2Component', () => {
  let component: Crearproducto2Component;
  let fixture: ComponentFixture<Crearproducto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crearproducto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crearproducto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
