import { useRef } from "react";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const history = useHistory();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    const query = inputRef.current.value;
    e.preventDefault();
    history.push(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="search recipe" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
