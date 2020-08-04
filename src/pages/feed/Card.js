import React from "react";

const Card = (newsArticle) => {
  return (
    
      <div className="news-article-container">
        <h2 className="news-article-title">{newsArticle.newsArticle.title}</h2>
        <img src={newsArticle.newsArticle.urlToImage} className="news-article-image"/>
      </div>
    
  );
};

export default Card;
