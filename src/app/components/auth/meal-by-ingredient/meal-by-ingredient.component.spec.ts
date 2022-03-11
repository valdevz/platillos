import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealByIngredientComponent } from './meal-by-ingredient.component';

describe('MealByIngredientComponent', () => {
  let component: MealByIngredientComponent;
  let fixture: ComponentFixture<MealByIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealByIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealByIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
