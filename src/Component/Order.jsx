import { NavLink } from "react-router-dom";
import OrderCheck from "./OrderCheck";
import { useEffect, useState } from "react";

export default function Order({ formData, handleChange, setFormData, isValid, errors, errorMesajlari, handleSubmit }) {
    const ekler = [
        {
            label: 'Pepperoni',
            value: ' pepperoni',
        },
        {
            label: 'Domates',
            value: ' domates',
        },
        {
            label: 'Biber',
            value: ' biber',
        },
        {
            label: 'Sosis',
            value: ' sosis',
        },
        {
            label: 'Misir',
            value: ' misir',
        },
        {
            label: 'Sucuk',
            value: ' sucuk',
        },
        {
            label: 'Kanada Jambonu',
            value: ' kanada Jambonu',
        },
        {
            label: 'Ananas',
            value: ' ananas',
        },
        {
            label: 'Tavuk Izgara',
            value: ' tavuk Izgara',
        },
        {
            label: 'Jalepeno',
            value: ' jalepeno',
        },
        {
            label: 'Kabak',
            value: ' kabak',
        },
        {
            label: 'Sogan',
            value: ' sogan',
        },
        {
            label: 'Sarimsak',
            value: ' sarimsak',
        },
    ];

    useEffect(() => { setFormData((formData) => ({ ...formData, secimler: formData.ekMalzemeler.length * 5 * formData.count })) }, [formData.ekMalzemeler, formData.count]);
    useEffect(() => { setFormData((formData) => ({ ...formData, toplam: (85.5 * formData.count)+formData.secimler })) }, [formData.ekMalzemeler, formData.count])

    return (
        <section className="deneme">
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
                        <h3 style={{ fontWeight: 'bold' }}>{formData.fiyat}₺</h3>
                        <p>4.9</p>
                        <p>(200)</p>
                    </div>
                    <p c>Frontent Dev olarak hala position:absolute kullaniyorsan bu cok aci
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
                                <legend className="select-legend">Boyut Sec{errors.boyutSec && <span style={{ color: 'red' }}>*</span>}</legend>
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
                                <legend className="select-legend">Hamur Sec{errors.hamurSec && <span style={{ color: 'red' }}>*</span>}</legend>
                                <select name='hamurSec' value={formData.hamurSec} onChange={handleChange}>
                                    <option value='' disabled>Hamur Kalinligi Sec</option>
                                    <option value='ince'>Ince</option>
                                    <option value='normal'>Normal</option>
                                    <option value='kalin'>Kalin</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset className="form-ekMalzemeler">
                            <legend>Ek Malzemeler (5₺)</legend>
                            {errors.ekMalzemeler && <p className="form-ek-info" style={{ color: 'red' }}>En az 4, en fazla 10 malzeme sec.</p>}
                            <div className="checkbox-container">
                                {ekler.map((ek) => (
                                    <OrderCheck
                                        key={ek.value}
                                        changeFunc={handleChange}
                                        isChecked={formData.ekMalzemeler.includes(ek.value)}
                                        fieldName="ekMalzemeler"
                                        value={ek.value}
                                        label={ek.label}
                                        data-cy='checkbox'
                                    />
                                ))}
                            </div>
                        </fieldset>

                        <fieldset className="isim-not">
                            <label htmlFor="isim">Isminizi giriniz:</label>
                            {errors.isim && <span style={{ color: 'red' }}>{errorMesajlari.isim}</span>}
                            <input
                                data-cy='isim'
                                type="text"
                                id="isim"
                                name="isim"
                                value={formData.isim}
                                onChange={handleChange}
                            />
                            <label htmlFor="not">Siparis Notu</label>
                            <textarea value={formData.comment} onChange={handleChange} id="not" name='comment' placeholder='Siparisine eklemek istedigin bir not var mi?'></textarea>
                        </fieldset>

                    </form>
                </section>
                <footer className="footer-content">
                    <div className="arttir-azalt">
                        <button id="azalt" onClick={() => setFormData((formData) => ({ ...formData, count: formData.count > 1 ? formData.count - 1 : formData.count }))}>-</button>
                        <input name='count' type="text" id="sayac" value={formData.count} readOnly />
                        <button id="arttir" onClick={() => setFormData({ ...formData, count: formData.count + 1 })}>+</button>
                    </div>
                    <div className="footer-order">
                        <h2>Siparis Toplami</h2>
                        {/* <p>Secimler: {formData.secimler}₺</p> */}
                        <div className="footer-span"><span>Secimler:</span> <span className="footer-secim">{formData.secimler}₺</span></div>
                        <div className="footer-span"><span>Toplam:</span><span className="footer-secim">{formData.toplam}₺</span></div>
                        {/* <p className="top-p">Toplam: {formData.toplam}₺</p> */}
                        <button disabled={!isValid} onClick={handleSubmit}>SIPARIS VER</button>
                    </div>
                </footer>

            </main>
        </section>
    );
}