import React, {useEffect} from "react";
import { connect } from "react-redux";
import { newsLoad } from "../../redux/actions/index.js";


const Feed = ({ news, newsFetch, newsFetchError, newsLoad }) => {
  const newsQuery = "http://newsapi.org/v2/everything?q=earthquake&sortBy=date&apiKey=32de8d4b1faf4bdfaa2acb02e60f7041"
  useEffect(() => {
    newsLoad(newsQuery);
    console.log('News Loading...', news);
  }, []);

  return (
    <div className="main-container no-scroll">
      <p>WIP...Feed</p>
      <div>{news.map(article=>{
        return (
          <p>{article.title}</p>
        )})}</div>
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    news: state.newsReducer.news,
    newsFetch: state.newsReducer.newsFetch,
    newsFetchError: state.newsReducer.newsFetchError,
  };
};

export default connect(mapPropsToState, {newsLoad})(Feed);
