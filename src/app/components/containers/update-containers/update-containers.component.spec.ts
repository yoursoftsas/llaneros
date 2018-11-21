import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContainersComponent } from './update-containers.component';

describe('UpdateContainersComponent', () => {
  let component: UpdateContainersComponent;
  let fixture: ComponentFixture<UpdateContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
