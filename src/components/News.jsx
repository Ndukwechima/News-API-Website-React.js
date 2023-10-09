import React, { useEffect, useState } from "react";
import NewsList from "./NewsList";
import "../styles/News.css";
import Category from "./Category";

const News = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("General");

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async (searchQuery = "") => {
    const country = "us";
    const apiKey = "5b039b929ba344409712522284841478";

    let url;
    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&country=${country}&apiKey=${apiKey}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${apiKey}`;
    }

    const res = await fetch(url);
    const response = await res.json();
    setData(response.articles);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    fetchData();
  };

  const handleSearch = (searchQuery) => {
    fetchData(searchQuery);
  };

  return (
    <section className="news-container">
      <div className="news-card">
        <Category
          handleCategoryChange={handleCategoryChange}
          handleSearch={handleSearch}
        />
        {data.map((article, index) => (
          <NewsList
            key={index}
            title={article.title}
            author={article.author}
            description={article.description}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
            url={article.url}
            content={article.content}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
