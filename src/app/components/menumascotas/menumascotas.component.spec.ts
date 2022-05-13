import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumascotasComponent } from './menumascotas.component';

describe('MenumascotasComponent', () => {
  let component: MenumascotasComponent;
  let fixture: ComponentFixture<MenumascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenumascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
