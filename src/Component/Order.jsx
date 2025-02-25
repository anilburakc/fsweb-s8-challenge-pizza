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
                    <label>Ek Malzemeler</label>
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
                </form>
            </div>
            <footer>siparis toplami</footer>
        </>
    );
}