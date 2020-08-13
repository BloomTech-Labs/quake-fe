import React, {useState} from "react";
import defaultArticleImage from '../../images/graphics/default-image.jpg'

const Card = (newsArticle) => {
  const [newsOpen, setNewsOpen] = useState(false); 
  let articleImage={}
  let articleKeyword = []
  let articleDate = newsArticle.newsArticle.pub_date.split("T") 
  if(newsArticle.newsArticle.keywords.length ===0 ){
    articleKeyword = "Tsunami"
  }
  else{
    articleKeyword=newsArticle.newsArticle.keywords[0].value;
  }
  if(newsArticle.newsArticle.multimedia[0] === undefined){
    articleImage= defaultArticleImage
  }
  else{
    articleImage=`https://www.nytimes.com/${newsArticle.newsArticle.multimedia[0].url}`
  }
  return (
    
      <div className={!newsOpen ? "news-article-container" : "news-article-container-open"} onClick={() => setNewsOpen((newsOpen) => !newsOpen)}>
        <div className="news-article-info">
          <h2 className="news-article-title">{newsArticle.newsArticle.headline.main}</h2>
          <p className = {!newsOpen ? "news-article-abstract" : "news-article-abstract-open"}>{!newsOpen ? newsArticle.newsArticle.abstract : newsArticle.newsArticle.lead_paragraph}</p>
          <div className="news-article-bottom-info">
            <h3 className="news-article-topic">{articleKeyword}</h3>
            <time className="news-article-date">{articleDate[0]}</time>
          </div>
        </div>
        <img src={articleImage} className="news-article-image"/>
      </div>
    
  );
};

export default Card;
