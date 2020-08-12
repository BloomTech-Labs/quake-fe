import React, {useEffect} from "react";
import { connect } from "react-redux";
import { newsLoad } from "../../redux/actions/index.js";
import Card from "./Card";


const Feed = ({ news, newsFetch, newsFetchError, newsLoad }) => {
  const newsTopic = "earthquake";
  const newsTopics = ["earthquake", "tsunami", "seismic"]
  

  
  useEffect(() => {
    newsLoad(newsTopics);
  }, []);

  if (newsFetchError === false){
    if (newsFetch===false){
      if (news.length === 0) {
        return(
        <div data-testid="empty-quakes" className="alt-result main-container no-scroll">
          <h1>Aww SHOCKS!</h1>
          <p>Looks like there aren't any news stories here.</p>
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
          <div className = "main-container scroll">
            <h1>Searching for news...</h1>
          </div>
        )
      }
    } else {
      return (
        <div data-testid="news-error" className = "main-container no-scroll">
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
