import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuproductosComponent } from './menuproductos.component';

describe('MenuproductosComponent', () => {
  let component: MenuproductosComponent;
  let fixture: ComponentFixture<MenuproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
