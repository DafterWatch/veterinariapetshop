import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagprincipaladminComponent } from './pagprincipaladmin.component';

describe('PagprincipaladminComponent', () => {
  let component: PagprincipaladminComponent;
  let fixture: ComponentFixture<PagprincipaladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagprincipaladminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagprincipaladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
