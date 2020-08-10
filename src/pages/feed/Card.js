import React from "react";

const Card = (newsArticle) => {
  let articleImage={}

  if(newsArticle.newsArticle.multimedia[0] === undefined){
    articleImage="empty"
  }
  else{
    articleImage=`https://www.nytimes.com/${newsArticle.newsArticle.multimedia[0].url}`
  }
  return (
    
      <div className="news-article-container">
        <div className="news-article-info">
          <h2 className="news-article-title">{newsArticle.newsArticle.headline.main}</h2>
          <div className="news-article-bottom-info">
            <h3 className="news-article-topic">{newsArticle.newsArticle.keywords[0].value}</h3>
            <time className="news-article-date">{newsArticle.newsArticle.pub_date}</time>
          </div>
        </div>
        <img src={articleImage} className="news-article-image"/>
      </div>
    
  );
};

export default Card;
