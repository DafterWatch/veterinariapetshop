import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroproductosComponent } from './registroproductos.component';

describe('RegistroproductosComponent', () => {
  let component: RegistroproductosComponent;
  let fixture: ComponentFixture<RegistroproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroproductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
