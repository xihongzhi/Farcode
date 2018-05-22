import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatfiveComponent } from './catfive.component';

describe('CatfiveComponent', () => {
  let component: CatfiveComponent;
  let fixture: ComponentFixture<CatfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
