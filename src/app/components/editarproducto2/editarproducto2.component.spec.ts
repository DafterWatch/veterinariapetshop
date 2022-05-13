import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editarproducto2Component } from './editarproducto2.component';

describe('Editarproducto2Component', () => {
  let component: Editarproducto2Component;
  let fixture: ComponentFixture<Editarproducto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editarproducto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editarproducto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
