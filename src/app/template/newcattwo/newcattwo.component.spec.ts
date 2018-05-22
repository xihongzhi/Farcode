import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcattwoComponent } from './newcattwo.component';

describe('NewcattwoComponent', () => {
  let component: NewcattwoComponent;
  let fixture: ComponentFixture<NewcattwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcattwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcattwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
