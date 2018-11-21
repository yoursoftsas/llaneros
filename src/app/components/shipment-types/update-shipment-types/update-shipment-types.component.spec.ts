import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShipmentTypesComponent } from './update-shipment-types.component';

describe('UpdateShipmentTypesComponent', () => {
  let component: UpdateShipmentTypesComponent;
  let fixture: ComponentFixture<UpdateShipmentTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateShipmentTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShipmentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
