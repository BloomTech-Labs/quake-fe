import React from "react";

const Card = (newsArticle) => {
  return (
    
      <div className="news-article-container">
        <div className="news-article-info">
          <h2 className="news-article-title">{newsArticle.newsArticle.title}</h2>
          <div className="news-article-bottom-info">
            <h3 className="news-article-topic"></h3>
            <time className="news-article-date">{newsArticle.newsArticle.publishedAt}</time>
          </div>
        </div>
        <img src={newsArticle.newsArticle.image} className="news-article-image"/>
      </div>
    
  );
};

export default Card;
