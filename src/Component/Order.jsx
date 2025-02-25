import { NavLink } from "react-router-dom";
import OrderCheck from "./OrderCheck";

export default function Order({ formData, handleChange }) {
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

    return (
        <>
            <header className="order-header">
                <img src="/images/iteration-1-images/logo.svg" alt="Logo" />
                <nav className="header-nav">
                    <NavLink to='/'>Anasayfa -</NavLink>
                    <NavLink style={{ fontWeight: 'bold' }} to='/order'> Siparis Olustur</NavLink>
                </nav>
            </header>
            <main className="order-main">
                <section className="order-info">
                    <h2>Position Absolute Aci Pizza</h2>
                    <div className="order-info-div">
                        <p style={{ fontWeight: 'bold' }}>85.50₺</p>
                        <p>4.9</p>
                        <p>(200)</p>
                    </div>
                    <p >Frontent Dev olarak hala position:absolute kullaniyorsan bu cok aci
                        pizza tam sana gore. Pizza, domates, peynir ve genellikle cesitli diger
                        malzemelerle kaplanmis, daha sonra geleneksel olarak odun atesinde bir
                        firinda yuksek sicaklikta pisirilen, genellikle yuvarlak, duzlestirilmis
                        mayali bugday bazli hamurdan olusan Italyan kokenli lezzetli bir yemektir.
                        Kucuk bir pizzaya bazen pizzetta denir.
                    </p>
                </section>
                <section className="order-form">
                    <form className="form-content">
                        <fieldset className="form-select">
                            <div className="select-radio-item">
                                <legend className="select-legend">Boyut Sec</legend>
                                <label>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        name="boyutSec"
                                        value='kucuk'
                                    />
                                    Kucuk
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        name="boyutSec"
                                        value='orta'
                                    />
                                    Orta
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        onChange={handleChange}
                                        name="boyutSec"
                                        value='buyuk'
                                    />
                                    Buyuk
                                </label>

                            </div>

                            <div className="select-option-item">
                                <legend className="select-legend">Hamur Sec</legend>
                                <select>
                                    <option value='ince'>Ince</option>
                                    <option value='normal'>Normal</option>
                                    <option value='kalin'>Kalin</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset className="form-ekMalzemeler">
                            <legend>Ek Malzemeler</legend>
                            <p className="form-ek-info">en fazla 10 malzeme sec</p>
                            <div className="checkbox-container">
                                {ekler.map((ek) => (
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

                        <fieldset className="isim-not">
                            <label htmlFor="isim">Isminizi giriniz:</label>
                            <input
                                type="text"
                                id="isim"
                                name="isim"
                            />
                            <label htmlFor="not">Siparis Notu</label>
                            <textarea id="not" placeholder='Siparisine eklemek istedigin bir not var mi?'></textarea>
                        </fieldset>

                    </form>
                </section>
                <footer>siparis toplami</footer>

            </main>
        </>
    );
}