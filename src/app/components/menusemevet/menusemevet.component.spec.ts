import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusemevetComponent } from './menusemevet.component';

describe('MenusemevetComponent', () => {
  let component: MenusemevetComponent;
  let fixture: ComponentFixture<MenusemevetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusemevetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusemevetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
