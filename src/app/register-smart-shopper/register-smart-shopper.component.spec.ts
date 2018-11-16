import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSmartShopperComponent } from './register-smart-shopper.component';

describe('RegisterSmartShopperComponent', () => {
  let component: RegisterSmartShopperComponent;
  let fixture: ComponentFixture<RegisterSmartShopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSmartShopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSmartShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
