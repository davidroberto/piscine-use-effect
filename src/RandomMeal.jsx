import { useState } from "react";
import { useEffect } from "react";

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  // permet de récupérer une recette aléatoire au chargement de la page

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((dataJson) => dataJson.json())
      .then((dataJs) => {
        setRandomMeal(dataJs.meals[0]);
      });
  }, []);

  // permet de récupérer une recette aléatoire au click
  const handleClick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((dataJson) => dataJson.json())
      .then((dataJs) => {
        setRandomMeal(dataJs.meals[0]);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Recharger une recette aléatoire</button>

      {randomMeal ? (
        <div>
          <h2>{randomMeal.strMeal}</h2>
          <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default RandomMeal;
