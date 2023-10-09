import React, { useState } from "react";
import "../styles/Category.css";

const Category = ({ handleCategoryChange, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category) => {
    handleCategoryChange(category);
  };

  const handleSearchClick = () => {
    // Call the handleSearch callback with the search query
    handleSearch(searchQuery);
  };

  return (
    <div className="category-container">
      <div className="category-items">
        <button onClick={() => handleCategoryClick("General")}>General</button>
        <button onClick={() => handleCategoryClick("Health")}>Health</button>
        <button onClick={() => handleCategoryClick("Science")}>Science</button>
        <button onClick={() => handleCategoryClick("Sports")}>Sports</button>
        <button onClick={() => handleCategoryClick("Technology")}>
          Technology
        </button>
        <button
          className="enta"
          onClick={() => handleCategoryClick("Entertainment")}
        >
          Entertainment
        </button>
        <form>
          <input
            type="text"
            placeholder="Search for news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="submit" type="button" onClick={handleSearchClick}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Category;
