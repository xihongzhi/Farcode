import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoletempleteComponent } from './roletemplete.component';

describe('RoletempleteComponent', () => {
  let component: RoletempleteComponent;
  let fixture: ComponentFixture<RoletempleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoletempleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoletempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
