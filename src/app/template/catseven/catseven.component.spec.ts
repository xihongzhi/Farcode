import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsevenComponent } from './catseven.component';

describe('CatsevenComponent', () => {
  let component: CatsevenComponent;
  let fixture: ComponentFixture<CatsevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
