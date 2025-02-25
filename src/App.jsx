import { useState } from 'react'
import './App.css'
import Home from './Component/Home.jsx'
import Order from './Component/Order.jsx'
import Succsess from './Component/Succsess.jsx'
import { Route, Switch } from 'react-router-dom'
function App() {

  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/order'>
        <Order />
      </Route>
      <Route path='/succsess'>
        <Succsess />
      </Route>
    </Switch>

    </>
  )
}

export default App
