import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSmartShopperRegComponent } from './register-smart-shopper-reg.component';

describe('RegisterSmartShopperRegComponent', () => {
  let component: RegisterSmartShopperRegComponent;
  let fixture: ComponentFixture<RegisterSmartShopperRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSmartShopperRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSmartShopperRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
