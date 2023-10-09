import React from "react";
import "../styles/NewsList.css";

const NewsList = ({
  title,
  description,
  urlToImage,
  author,
  url,
  publishedAt,
}) => {
  return (
    <section className="news-cards">
      <h4>
        <a href={url}>{title}</a>
      </h4>
      <figure>
        <figcaption>
          <img src={urlToImage} width={380} height={250} alt="News" />
          <p>{description}</p>
        </figcaption>
        <div className="authur-div">
          <div className="authur">
            <p>
              <p className="authur-p">
                <small className="smal">by </small>
                {author && typeof author === "string" && author.length > 6
                  ? author.slice(0, 6)
                  : author}
              </p>
            </p>
            <p className="smal">at {publishedAt}</p>
          </div>
          <small>
            <a href={url}>
              <button className="btn-read-more">Read More...</button>
            </a>
          </small>
        </div>
      </figure>
    </section>
  );
};

export default NewsList;
