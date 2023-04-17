import { useEffect, useState } from "react";

const MealList = () => {
  // je créé une variable de state "meals"
  // pour pouvoir stocker les données de l'API
  // et je créé une fonction pour modifier cette variable
  // la variable de state et la fonction sont fournies par
  // useState
  // par défaut, la variable de state est initialisée à []

  const [meals, setMeals] = useState([]);

  // je créé une fonction qui va être exécutée
  // qu'une seule au premier chargement du composant
  // grâce à useEffect et le tableau vide (en second paramètre)
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((mealsJson) => mealsJson.json())
      .then((mealsJs) => {
        // je modifie la variable de state "meals"
        // pour lui donner les recettes issues de l'api
        // ce qui provoque aussi le rechargement de mon composant
        setMeals(mealsJs.meals);
      });
  }, []);

  return (
    <div>
      <h1>Liste des recettes de cuisine : </h1>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <h2>{meal.strMeal}</h2>
        </div>
      ))}
    </div>
  );
};

export default MealList;
