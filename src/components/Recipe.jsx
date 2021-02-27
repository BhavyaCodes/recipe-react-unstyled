import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      setRecipe(response.data.meals[0]);
    };
    getData();
  }, [params]);

  if (!recipe) {
    return <h1>Loading</h1>;
  }

  function renderIngredients() {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <div key={recipe[`strIngredient${i}`]}>
            <img
              src={`https://www.themealdb.com/images/ingredients/${
                recipe[`strIngredient${i}`]
              }.png`}
              alt={recipe[`strIngredient${i}`]}
            />
            <p>{recipe[`strIngredient${i}`]}</p>
            <p>{recipe[`strMeasure${i}`]}</p>
          </div>
        );
      }
    }
    return ingredients;
  }

  return (
    <div>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      {renderIngredients()}
    </div>
  );
}

export default Recipe;
