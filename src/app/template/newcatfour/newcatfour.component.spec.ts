import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatfourComponent } from './newcatfour.component';

describe('NewcatfourComponent', () => {
  let component: NewcatfourComponent;
  let fixture: ComponentFixture<NewcatfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcatfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
