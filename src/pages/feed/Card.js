import React from "react";

const Card = (newsArticle) => {
    console.log("inside card", newsArticle)
    console.log("title of article -> ", newsArticle.newsArticle.title);
  return (
    <div className="main-container no-scroll">
      <h1>{newsArticle.newsArticle.title}</h1>
    </div>
  );
};

export default Card;
