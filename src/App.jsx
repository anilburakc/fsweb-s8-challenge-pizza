import { useState } from 'react'
import './App.css'
import Home from './Component/Home'
import Order from './Component/Order'
import Succsess from './Component/Succsess'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

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
