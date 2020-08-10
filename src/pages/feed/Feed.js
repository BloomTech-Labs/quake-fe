import React, {useEffect} from "react";
import { connect } from "react-redux";
import { newsLoad } from "../../redux/actions/index.js";
import Card from "./Card";


const Feed = ({ news, newsFetch, newsFetchError, newsLoad }) => {
  const newsTopic = "earthquake";
  const newsTopics = ["earthquake", "seismic activity", "volcano", "tsunami", "aftershock", "quake", "tremor"]
  const newsToken = process.env.REACT_APP_NYT_API_TOKEN;
  const newsQuery = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${newsTopic}&api-key=${newsToken}`
  useEffect(() => {
    newsLoad(newsQuery);
    const newNews={...news,
      news, 
    newsTopic1: newsTopic}
    console.log('News Loading...', news);
    console.log("NEW NEWS", newNews);
  }, []);

  if (newsFetchError === false){
    if (newsFetch===false){
      if (news.length === 0) {
        return(
        <div data-testid="empty-quakes" className="alt-result">
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
