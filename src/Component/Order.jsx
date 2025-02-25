import { NavLink } from "react-router-dom";

export default function Order(){
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
            <div>form elemanlari</div>
            <footer>siparis toplami</footer>
        </>
    );
}