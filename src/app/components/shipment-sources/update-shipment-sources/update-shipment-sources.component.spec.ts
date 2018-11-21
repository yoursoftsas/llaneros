import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShipmentSourcesComponent } from './update-shipment-sources.component';

describe('UpdateShipmentSourcesComponent', () => {
  let component: UpdateShipmentSourcesComponent;
  let fixture: ComponentFixture<UpdateShipmentSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateShipmentSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateShipmentSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
