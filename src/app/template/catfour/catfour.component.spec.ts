import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatfourComponent } from './catfour.component';

describe('CatfourComponent', () => {
  let component: CatfourComponent;
  let fixture: ComponentFixture<CatfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
