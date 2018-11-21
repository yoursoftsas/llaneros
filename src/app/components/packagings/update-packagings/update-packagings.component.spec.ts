import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePackagingsComponent } from './update-packagings.component';

describe('UpdatePackagingsComponent', () => {
  let component: UpdatePackagingsComponent;
  let fixture: ComponentFixture<UpdatePackagingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePackagingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePackagingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
