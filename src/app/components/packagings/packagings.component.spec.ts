import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingsComponent } from './packagings.component';

describe('PackagingsComponent', () => {
  let component: PackagingsComponent;
  let fixture: ComponentFixture<PackagingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
