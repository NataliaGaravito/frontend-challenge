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
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/closet room">
          <ClosetRoom />
        </Route>
        <Route path="/vendedoras">
          <Vendedoras />
        </Route>
        <Route path="/instagram" component={() => { 
          window.location.href = 'https://www.instagram.com/'; 
          return null;
        }}/>
      </Switch>
    </Router>
  );
}

export default App;
