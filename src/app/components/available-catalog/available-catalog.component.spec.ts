import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCatalogComponent } from './available-catalog.component';

describe('AvailableCatalogComponent', () => {
  let component: AvailableCatalogComponent;
  let fixture: ComponentFixture<AvailableCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
