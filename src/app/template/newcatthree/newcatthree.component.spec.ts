import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatthreeComponent } from './newcatthree.component';

describe('NewcatthreeComponent', () => {
  let component: NewcatthreeComponent;
  let fixture: ComponentFixture<NewcatthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcatthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
