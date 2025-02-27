import { useState } from 'react'
import './App.css'
import Home from './Component/Home.jsx'
import Order from './Component/Order.jsx'
import Succsess from './Component/Succsess.jsx'
import { Route, Switch } from 'react-router-dom'


const initialFormData ={
  boyutSec: ['Kucuk', 'Orta', 'Buyuk'],
  hamurSec: 'Hamur Kalinligi',
  ekMalzemeler: [],
  isim:'',
  comment:''
}
function App() {
  const [formData, setFormData] = useState(initialFormData)

  function handleChange(event){
    let newValue;
    const {type, value, name, checked} = event.target
    if(type === 'checkbox'){
      const oldValues = formData[name]

        if(oldValues.includes(value)){
          newValue = oldValues.filter((v)=>v !== value)
        }else{
          newValue = [...oldValues, value]
        }
    }else{
      newValue = value;
    }
    setFormData({...formData, [name]: newValue})
    console.log(newValue)
  }

  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/order'>
        <Order formData={formData} handleChange={handleChange}/>
      </Route>
      <Route path='/succsess'>
        <Succsess />
      </Route>
    </Switch>

    </>
  )
}

export default App
