import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcateightComponent } from './newcateight.component';

describe('NewcateightComponent', () => {
  let component: NewcateightComponent;
  let fixture: ComponentFixture<NewcateightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcateightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcateightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
