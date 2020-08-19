import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { Home } from './components/Home/Home';
import { AboutShow } from './components/AboutShow/AboutShow';
import { Episodes } from './components/AboutShow/Seasons/Episodes/Episodes';
import { AllCast } from './components/AboutShow/Cast/AllCast/AllCast';
import { AllAkas } from './components/AboutShow/Akas/AllAkas/AllAkas';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about_show/:id' component={AboutShow} />
      <Route exact path='/about_show/season_episodes/:id' component={Episodes} />
      <Route exact path='/about_show/all_cast/:id' component={AllCast} />
      <Route exact path='/about_show/all_akas/:id' component={AllAkas} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
