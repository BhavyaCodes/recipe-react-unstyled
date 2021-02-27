import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Landing() {
  const [categories, setCategories] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(resp);
      setCategories(resp.data.categories);
    };
    getData();
  }, []);

  if (!categories) {
    return <h2>Loading</h2>;
  }

  const handleClick = (cat) => {
    console.log(cat);
    history.push(`/category/${cat}`);
  };

  const renderCategores = () => {
    return categories.map((cat) => (
      <div
        onClick={() => {
          handleClick(cat.strCategory);
        }}
        key={cat.idCategory}
      >
        <h1>{cat.strCategory}</h1>
        <img src={cat.strCategoryThumb} alt={cat.strCategory} />
      </div>
    ));
  };

  return <div>{renderCategores()}</div>;
}

export default Landing;
