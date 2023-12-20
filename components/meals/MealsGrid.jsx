import MealItem from "./mealItem";
import classes from "./mealsGrid.module.css";
import { getMeals } from "@/lib/meals";

export default async function MealsGrid() {
  const meals = await getMeals();
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meals={meals} />
        </li>
      ))}
    </ul>
  );
}
