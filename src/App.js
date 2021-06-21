import { StrictMode } from "react";
import { render } from "react-dom";
// import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"  
// import SearchParams from "./SearchParams";
// import Details from "./Details"

import  GameBoard  from "./components/GameBoard"
import PlayerTurn from "./components/PlayerTurn";
import Menu from "./components/Menu";

const App = () => {
  return (

    <div>
      <span className="pageTitle">TicTacRetroToe</span>
      <GameBoard></GameBoard>
      <PlayerTurn></PlayerTurn>
      <Menu></Menu>
      <a href="https://www.instagram.com/gali_horizon/" className="madeBy">Made by: Carlos Galiano</a>
    </div>
  );
};

render(
  <StrictMode>
    <App></App>
  </StrictMode>, 
  document.getElementById("root"));