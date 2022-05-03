import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidocontraComponent } from './olvidocontra.component';

describe('OlvidocontraComponent', () => {
  let component: OlvidocontraComponent;
  let fixture: ComponentFixture<OlvidocontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidocontraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidocontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
