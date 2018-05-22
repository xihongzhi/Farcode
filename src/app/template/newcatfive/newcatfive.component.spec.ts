import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatfiveComponent } from './newcatfive.component';

describe('NewcatfiveComponent', () => {
  let component: NewcatfiveComponent;
  let fixture: ComponentFixture<NewcatfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcatfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
