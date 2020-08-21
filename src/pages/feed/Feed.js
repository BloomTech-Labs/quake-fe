import React, { useEffect } from "react";
// import { useMediaQuery } from "react-responsive";
import { connect } from "react-redux";
import { newsLoad } from "../../redux/actions/index.js";
import { ReactComponent as CracksImage } from "../../images/graphics/cracks.svg";
import { ReactComponent as SearchImage } from "../../images/icons/search.svg";
import Card from "./Card";

const Feed = ({ news, newsFetch, newsFetchError, newsLoad }) => {
  const newsTopics = ["Earthquake", "Tsunami", "Seismic"];

  useEffect(() => {
    newsLoad(newsTopics);
  }, []);

  // const [sideView, setSideView] = useState();
  // const isBigScreen = useMediaQuery({
  //   query: "(min-width: 800px)",
  // });

  // useEffect(() => {
  //   const container = document.getElementById("results-container");
  //   const map = document.getElementById("map-container");

  //   if (isBigScreen) {
  //     container.style.height = "100%";
  //     container.style.transform = "translateY(0)";
  //     map.style.height = "100%";
  //   } else {
  //     for (let i = 0; i < view.length; i++) {
  //       if (viewType === view[i].view) {
  //         container.style.height = view[i].cheight;
  //         container.style.transform = view[i].ctransform;
  //         map.style.height = view[i].mheight;
  //       }
  //     }
  //   }
  // }, [viewType, isBigScreen]);

  if (newsFetchError === false) {
    if (newsFetch === false) {
      if (news.length === 0) {
        return (
          <div data-testid="empty-quakes" className="alt-result">
            <CracksImage className="result-image" />
            <h1>Aww SHOCKS!</h1>
            <p>Looks like there aren't any news stories here.</p>
          </div>
        );
      } else {
        return (
          <>
            {news.map((article, index) => {
              return <Card newsArticle={article} key={index} />;
            })}
          </>
        );
      }
    } else {
      return (
        <div className="alt-result">
          <SearchImage className="result-image" />
          <h1>Searching for news...</h1>
        </div>
      );
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

export default connect(mapPropsToState, { newsLoad })(Feed);
