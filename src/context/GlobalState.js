import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // Action
  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  //remove movie
  const removeMovieFromWatchList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCH", payload: movie });
  };

  //Move to watchList
  const moveToWatchList=(movie)=>{
    dispatch({type: "MOVE_TO_WATCHLIST", payload:movie})
  }
  //remove from watched
  const removeFromWatched=(id)=>{
    dispatch({type:"REMOVE_FROM_WATCHED", payload:id})
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList,
        removeMovieFromWatchList,
        addMovieToWatched,
        moveToWatchList,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

// function GlobalState(){
//     return(
//         <></>
//     )
// }
// export default GlobalState
