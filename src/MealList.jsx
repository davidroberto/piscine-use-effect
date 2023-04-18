import { useState, useEffect } from "react";

const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((dataJson) => dataJson.json())
      .then((dataJs) => {
        setMeals(dataJs.meals);
      });
  }, []);

  return (
    <div>
      {meals.map((meal) => {
        return (
          <div>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        );
      })}
    </div>
  );
};

export default MealList;
