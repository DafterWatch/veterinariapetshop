import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuusuariosComponent } from './menuusuarios.component';

describe('MenuusuariosComponent', () => {
  let component: MenuusuariosComponent;
  let fixture: ComponentFixture<MenuusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
