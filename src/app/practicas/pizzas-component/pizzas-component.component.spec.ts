import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasComponentComponent } from './pizzas-component.component';

describe('PizzasComponentComponent', () => {
  let component: PizzasComponentComponent;
  let fixture: ComponentFixture<PizzasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzasComponentComponent]
    });
    fixture = TestBed.createComponent(PizzasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
