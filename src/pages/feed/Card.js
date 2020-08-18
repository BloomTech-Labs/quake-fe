import React, { useState } from "react";
import defaultArticleImage from "../../images/graphics/default-image.jpg";

const Card = (newsArticle) => {
  const [newsOpen, setNewsOpen] = useState(false);
  const newsTopics = ["Earthquake", "Tsunami", "Seismic", "Alaska"];
  let articleImage = {};
  let articleKeyword = [];
  let articleDate = newsArticle.newsArticle.pub_date.split("T");
  const lowerCaseTopic = newsArticle.newsArticle.topic.toLowerCase()

  if (newsArticle.newsArticle.multimedia[0] === undefined) {
    articleImage = defaultArticleImage;
  } else {
    articleImage = `https://www.nytimes.com/${newsArticle.newsArticle.multimedia[0].url}`;
  }

  if (newsArticle.newsArticle.abstract === "") {
    newsArticle.newsArticle.abstract =
      "Please visit the full article to read more.";
    newsArticle.newsArticle.lead_paragraph =
      "Please visit the full article to read more.";
  }

  return (
    <div
      className={
        !newsOpen ? "news-article-container" : "news-article-container-open"
      }
      onClick={() => setNewsOpen((newsOpen) => !newsOpen)}
    >
      <div className="news-article-info">
        <h2 className="news-article-title">
          {newsArticle.newsArticle.headline.main}
        </h2>
        <p
          className={
            !newsOpen ? "news-article-abstract" : "news-article-abstract-open"
          }
        >
          {!newsOpen
            ? newsArticle.newsArticle.abstract
            : newsArticle.newsArticle.lead_paragraph}
        </p>
        <a
          href={newsArticle.newsArticle.web_url}
          target="_blank"
          className={
            !newsOpen ? "news-article-button" : "news-article-button-open"
          }
        >
          Open Article
        </a>
        <div className="news-article-bottom-info">
          <h3 className={`topic-${lowerCaseTopic}`}>
            {newsArticle.newsArticle.topic}
          </h3>
          <time className="news-article-date">{articleDate[0]}</time>
        </div>
      </div>
      <img src={articleImage} className="news-article-image" />
    </div>
  );
};

export default Card;
