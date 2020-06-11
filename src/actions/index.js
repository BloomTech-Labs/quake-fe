import axios from "axios";

// quakeReducer Actions
export const QUAKE_FETCH = "QUAKE_FETCH";
export const QUAKE_FETCH_ERROR = "QUAKE_FETCH_ERROR";
export const DISPLAY_QUAKES = "DISPLAY_QUAKES ";
export const SORT_QUAKES = "SORT_QUAKES";

// searchReducer Actions
export const UPDATE_SEARCH_PARAMS = "UPDATE_SEARCH_PARAMS";

export const quakeFetch = (theQuery) => (dispatch) => {
  dispatch({ type: QUAKE_FETCH });
  setTimeout(() => {
    axios
      .get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=20000${theQuery}`
      )
      .then((res) => {
        console.log(res.data.features);
        dispatch({ type: DISPLAY_QUAKES, quakeData: res.data.features });
      })
      .catch((err) => {
        console.log("Error Fetching Earthquake Data From USGS: ", err);
        dispatch({ type: QUAKE_FETCH_ERROR });
      });
  }, 500);
};

export const updateSearchParams = (theParams) => (dispatch) => {
  dispatch({ type: UPDATE_SEARCH_PARAMS, params: theParams });
};

export const quakeSort = (sortBy, quakes) => (dispatch) =>{
  if(sortBy==="ascending magnitude"){
  const sortedQuakes = quakes.sort((a,b)=>a.properties.mag-b.properties.mag);
  
  console.log('SORTED QUAKES: ', sortedQuakes);
  dispatch({ type: SORT_QUAKES, quakeData: [] });
  dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
  }
  else if(sortBy==="descending magnitude"){
    const sortedQuakes = quakes.sort((a,b)=>b.properties.mag-a.properties.mag);
    
    console.log('SORTED QUAKES: ', sortedQuakes);
    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
    }
  else if(sortBy==="newest"){
    const sortedQuakes = quakes.sort((a,b)=>b.properties.time-a.properties.time);
    
    console.log('SORTED QUAKES: ', sortedQuakes);
    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
    }
  else if(sortBy==="oldest"){
    const sortedQuakes = quakes.sort((a,b)=>a.properties.time-b.properties.time);
    
    console.log('SORTED QUAKES: ', sortedQuakes);
    dispatch({ type: SORT_QUAKES, quakeData: [] });
    dispatch({ type: SORT_QUAKES, quakeData: sortedQuakes });
    }
};
