import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuvacunasComponent } from './menuvacunas.component';

describe('MenuvacunasComponent', () => {
  let component: MenuvacunasComponent;
  let fixture: ComponentFixture<MenuvacunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuvacunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuvacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
