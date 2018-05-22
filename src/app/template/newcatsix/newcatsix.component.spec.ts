import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatsixComponent } from './newcatsix.component';

describe('NewcatsixComponent', () => {
  let component: NewcatsixComponent;
  let fixture: ComponentFixture<NewcatsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcatsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
