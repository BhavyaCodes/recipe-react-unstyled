import { useRef } from "react";

function SearchBar() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} placeholder="search recipe" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
