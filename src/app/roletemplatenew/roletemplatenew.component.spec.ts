import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoletemplatenewComponent } from './roletemplatenew.component';

describe('RoletemplatenewComponent', () => {
  let component: RoletemplatenewComponent;
  let fixture: ComponentFixture<RoletemplatenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoletemplatenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoletemplatenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
