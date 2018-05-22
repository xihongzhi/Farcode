import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateightComponent } from './cateight.component';

describe('CateightComponent', () => {
  let component: CateightComponent;
  let fixture: ComponentFixture<CateightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
