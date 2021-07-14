import React from 'react';
import './App.css';
import Shop from './views/shop/Shop';
import Blog from './views/blog/Blog';
import ClosetRoom from './views/closetRoom/ClosetRoom';
import Vendedoras from './views/vendedoras/Vendedoras';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route exact path="/SHOP">
          <Shop />
        </Route>
        <Route exact path="/BLOG">
          <Blog />
        </Route>
        <Route exact path="/CLOSET ROOM">
          <ClosetRoom />
        </Route>
        <Route exact path="/VENDEDORAS">
          <Vendedoras />
        </Route>
        <Route exact path="/INSTAGRAM"component={() => { 
          window.location.href = 'https://www.instagram.com/'; 
          return null;
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
