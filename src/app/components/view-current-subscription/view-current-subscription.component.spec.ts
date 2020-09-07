import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentSubscriptionComponent } from './view-current-subscription.component';

describe('ViewCurrentSubscriptionComponent', () => {
  let component: ViewCurrentSubscriptionComponent;
  let fixture: ComponentFixture<ViewCurrentSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCurrentSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCurrentSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
