import { NavLink } from "react-router-dom";
import OrderCheck from "./OrderCheck";

export default function Order({formData, handleChange}){
    const ekler = [
        {
            label: 'Pepperoni',
            value: 'pepperoni',
        },
        {
            label: 'Domates',
            value: 'domates',
        },
        {
            label: 'Biber',
            value: 'biber',
        },
        {
            label: 'Sosis',
            value: 'sosis',
        },        
        {
            label: 'Misir',
            value: 'misir',
        },
        {
            label: 'Sucuk',
            value: 'sucuk',
        },        
        {
            label: 'Kanada Jambonu',
            value: 'kanadaJambonu',
        },
        {
            label: 'Ananas',
            value: 'ananas',
        },        
        {
            label: 'Tavuk Izgara',
            value: 'tavukIzgara',
        },
        {
            label: 'Jalepeno',
            value: 'jalepeno',
        },        
        {
            label: 'Kabak',
            value: 'kabak',
        },
        {
            label: 'Sogan',
            value: 'sogan',
        },
        {
            label: 'Sarimsak',
            value: 'sarimsak',
        },
    ];

    return(
        <>
            <h1>Order</h1>
            <header>
                <img src="/images/iteration-1-images/logo.svg"/>
                <NavLink to='/'>Anasayfa -</NavLink>
                <NavLink to='/order'> Siparis Olustur</NavLink>
            </header>
            <section>
                <h2>Position Absolute Aci Pizza</h2>
                <div>
                    <p style={{fontWeight:'bold'}}>85.50₺</p>
                    <p>4.9</p>
                    <p>(200)</p>
                </div>
                <p>Frontent Dev olarak hala position:absolute kullaniyorsan bu cok aci 
                    pizza tam sana gore. Pizza, domates, peynir ve genellikle cesitli diger
                    malzemelerle kaplanmis, daha sonra geleneksel olarak odun atesinde bir
                    firinda yuksek sicaklikta pisirilen, genellikle yuvarlak, duzlestirilmis
                    mayali bugday bazli hamurdan olusan Italyan kokenli lezzetli bir yemektir.
                    Kucuk bir pizzaya bazen pizzetta denir.
                </p>
            </section>
            <div>
                <form>
                    <fieldset className="form-select">
                        <div className="select-radio">
                            <legend className="select-legend">Boyut Sec</legend>
                            <label className="select-radio-item">
                                <input 
                                    type="radio"
                                    onChange={handleChange}
                                    name="boyutSec"
                                    value='kucuk'
                                />
                                Kucuk
                            </label>
                            <label className="select-radio-item">
                                <input 
                                    type="radio"
                                    onChange={handleChange}
                                    name="boyutSec"
                                    value='orta'
                                />
                                Orta
                            </label>
                            <label className="select-radio-item">
                                <input 
                                    type="radio"
                                    onChange={handleChange}
                                    name="boyutSec"
                                    value='buyuk'
                                />
                                Buyuk
                            </label>
                        </div>
                        <div className="select-option">
                            <legend className="select-legend">Hamur Sec</legend>
                            <select>
                                <option value='ince'>Ince</option>
                                <option value='normal'>Normal</option>
                                <option value='kalin'>Kalin</option>
                            </select>
                        </div>

                    </fieldset>
                    <fieldset className="form-ek">
                    <legend>Ek Malzemeler</legend>
                    <p className="form-ek-info">en fazla 10 malzeme sec</p>
                        <div className="checkbox-container">
                        {ekler.map((ek)=>(
                        <OrderCheck 
                            key={ek.value}
                            changeFunc={handleChange}
                            isChecked={formData.ekMalzemeler.includes(ek.value)}
                            fieldName="ekMalzemeler"
                            value={ek.value}
                            label={ek.label}
                        />
                        ))}
                        </div>
                    </fieldset>
                </form>
            </div>
            <footer>siparis toplami</footer>
        </>
    );
}