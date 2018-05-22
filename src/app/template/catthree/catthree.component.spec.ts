import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatthreeComponent } from './catthree.component';

describe('CatthreeComponent', () => {
  let component: CatthreeComponent;
  let fixture: ComponentFixture<CatthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
