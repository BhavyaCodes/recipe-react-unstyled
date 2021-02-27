import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Categories = function () {
  const [recipies, setRecipies] = useState(null);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
      );
      setRecipies(response.data.meals);
    };
    getData();
  }, [params]);

  if (!recipies) {
    return <h2>Loading</h2>;
  }
  const renderCards = () => {
    return recipies.map((r) => (
      <div
        onClick={() => {
          history.push(`/recipe/${r.idMeal}`);
        }}
        key={r.idMeal}
      >
        <h1>{r.strMeal}</h1>
        <img src={r.strMealThumb} alt={r.strMeal} />
      </div>
    ));
  };
  return <div>{renderCards()}</div>;
};

export default Categories;
