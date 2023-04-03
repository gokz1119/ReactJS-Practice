import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  // Use the URLSearchParams API to extract the query parameters
  // useLocation().search will have the query parameters
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const query = useQuery();
  const term = query.get("term");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Let's extract search term using ref
    const searchValue = inputRef.current.value;
    navigate(`?term=${searchValue}`);
  };

  return (
    <div>
      <form action="" onSubmit={formSubmitHandler}>
        <input type="text" name="term" ref={inputRef} placeholder="Term" />
        <input type="submit" value="Search" />
        {term && <h2>Results for '{term}'</h2>}
      </form>
    </div>
  );
};

export default Search;
