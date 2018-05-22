import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatoneComponent } from './catone.component';

describe('CatoneComponent', () => {
  let component: CatoneComponent;
  let fixture: ComponentFixture<CatoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
