import { useEffect, useState } from 'react'
import './App.css'
import Home from './Component/Home.jsx'
import Order from './Component/Order.jsx'
import Succsess from './Component/Succsess.jsx'
import { Route, Switch } from 'react-router-dom'


const initialFormData = {
  boyutSec: '',
  hamurSec: '',
  ekMalzemeler: [],
  isim: '',
  comment: '',
  toplam: '',
  secimler: 0,
  count: 1
}
const errorMesajlari ={
  isim: 'En az 3 karakter olmali',
}
function App() {
  const [formData, setFormData] = useState(initialFormData)
  const [isValid, setIsvalid] = useState(false)
  const [errors, setErrors] = useState({
    boyutSec: true,
    hamurSec: true,
    ekMalzemeler: true,
    isim: true,
  })

  useEffect(()=>{
    setErrors((error)=>({...error, isim:formData.isim.length>=3 ? false:true}))
    setErrors((error)=>({...error, ekMalzemeler:formData.ekMalzemeler.length>3 && formData.ekMalzemeler.length<11 ? false:true}))
    setErrors((error)=>({...error, hamurSec:formData.hamurSec.length===0 ? true:false}))
    setErrors((error)=>({...error, boyutSec:formData.boyutSec.length===0 ? true:false}))
  }, [formData])

  function handleChange(event) {
    let newValue;
    const { type, value, name, checked } = event.target
    if (type === 'checkbox') {
      const oldValues = formData[name]

      if (oldValues.includes(value)) {
        newValue = oldValues.filter((v) => v !== value)
      } else {
        newValue = [...oldValues, value]
      }
    } else {
      newValue = value;
    }
    setFormData({ ...formData, [name]: newValue })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    axios.post('https://reqres.in/api/pizza', {
      formData
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/order'>
          <Order errorMesajlari={errorMesajlari} errors={errors} isValid={isValid} handleSubmit={handleSubmit} formData={formData} handleChange={handleChange} setFormData={setFormData} />
        </Route>
        <Route path='/succsess'>
          <Succsess />
        </Route>
      </Switch>

    </>
  )
}

export default App
