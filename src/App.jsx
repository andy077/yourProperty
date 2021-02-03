import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Buy from './Buy/Buy';
import Sell from './Sell/Sell';

const App = () => {
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/buy' component={Buy} />
          <Route exact path='/sell' component={Sell} />      
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
