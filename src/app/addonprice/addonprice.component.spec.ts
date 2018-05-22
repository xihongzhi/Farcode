import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonpriceComponent } from './addonprice.component';

describe('AddonpriceComponent', () => {
  let component: AddonpriceComponent;
  let fixture: ComponentFixture<AddonpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddonpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
