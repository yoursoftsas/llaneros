import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersDetailComponent } from './suppliers-detail.component';

describe('SuppliersDetailComponent', () => {
  let component: SuppliersDetailComponent;
  let fixture: ComponentFixture<SuppliersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
