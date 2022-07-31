import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeListComponent } from './coffe-list.component';

describe('CoffeListComponent', () => {
  let component: CoffeListComponent;
  let fixture: ComponentFixture<CoffeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
