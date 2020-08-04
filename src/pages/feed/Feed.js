import React, {useEffect} from "react";
import { connect } from "react-redux";
import { newsLoad } from "../../redux/actions/index.js";
import Card from "./Card";


const Feed = ({ news, newsFetch, newsFetchError, newsLoad }) => {
  const newsQuery = "http://newsapi.org/v2/everything?q=earthquake&sortBy=date&apiKey=32de8d4b1faf4bdfaa2acb02e60f7041"
  useEffect(() => {
    newsLoad(newsQuery);
    console.log('News Loading...', news);
  }, []);

  if (newsFetchError === false){
    if (newsFetch===false){
      if (news.length === 0) {
        return(
        <div data-testid="empty-quakes" className="alt-result">
          <h1>Aww SHOCKS!</h1>
          <p>Looks like there aren't any quakes here.</p>
          <p>Why not adjust your filters or try a new location?</p>
        </div>
        );
      } else {
        return (
          <div className="main-container scroll">
          {news.map((article, index)=>{
            return <Card newsArticle={article} key={index}/>
            })}
          </div>
        );
      }
     } else {
        return (
          <h1>Searching for news...</h1>
        )
      }
    } else {
      return (
        <div data-testid="news-error">
          There was a problem getting your news...
        </div>
      );
    }
  };

const mapPropsToState = (state) => {
  return {
    news: state.newsReducer.news,
    newsFetch: state.newsReducer.newsFetch,
    newsFetchError: state.newsReducer.newsFetchError,
  };
};

export default connect(mapPropsToState, {newsLoad})(Feed);
