import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatsevenComponent } from './newcatseven.component';

describe('NewcatsevenComponent', () => {
  let component: NewcatsevenComponent;
  let fixture: ComponentFixture<NewcatsevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcatsevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
