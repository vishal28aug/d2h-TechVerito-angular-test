import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePackComponent } from './subscribe-pack.component';

describe('SubscribePackComponent', () => {
  let component: SubscribePackComponent;
  let fixture: ComponentFixture<SubscribePackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribePackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
