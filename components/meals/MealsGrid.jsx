import MealItem from "./mealItem";
import classes from "./mealsGrid.module.css";

export default function MealsGrid({ meals }) {
  console.log("mealsGrid.jsx");
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
