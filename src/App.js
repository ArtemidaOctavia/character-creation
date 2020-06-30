import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/headerContainer";
import {Route} from "react-router-dom";
import ProfessionContainer from "./components/profession/professionContainer";
import StatsContainer from "./components/stats/statsContainer";
import TraitsContainer from "./components/traits/traitsContainer";
import SkillsContainer from "./components/skills/skillsContainer";

function App() {
  return (
    <div>
      <HeaderContainer/>
      <Route path={`/profession`}
             render={() => <ProfessionContainer/>}/>
      <Route path={`/stats`}
             render={() => <StatsContainer/>}/>
      <Route path={`/traits`}
             render={() => <TraitsContainer/>}/>
      <Route path={`/skills`}
             render={() => <SkillsContainer/>}/>
      {/*<Route path={`/description`}*/}
             {/*render={() => <Description/>}/>*/}
    </div>
  );
}

export default App;
