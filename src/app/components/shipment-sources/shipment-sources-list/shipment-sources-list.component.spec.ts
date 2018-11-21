import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentSourcesListComponent } from './shipment-sources-list.component';

describe('ShipmentSourcesListComponent', () => {
  let component: ShipmentSourcesListComponent;
  let fixture: ComponentFixture<ShipmentSourcesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentSourcesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentSourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
