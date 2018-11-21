import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingsListComponent } from './packagings-list.component';

describe('PackagingsListComponent', () => {
  let component: PackagingsListComponent;
  let fixture: ComponentFixture<PackagingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagingsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
