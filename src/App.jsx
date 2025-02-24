import { useState } from 'react'
import './App.css'
import Home from './Component/Home.jsx'
import Order from './Component/Order.jsx'
import Succsess from './Component/Success.jsx'
import { Route, Switch } from 'react-router-dom'
function App() {

  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/order'>
        <Order />
      </Route>
      <Route exact path='/succsess'>
        <Succsess />
      </Route>
    </Switch>

    </>
  )
}

export default App
