import React from 'react';
import './Promotion.css';

export default function Promotion() {
    const iphone = [
        {

            img: "https://a-static.mlcdn.com.br/800x560/smartphone-iphone-11-128gb-4g-6-1-polegadas-liquid-retina-hd-camera-dupla-12mp-selfie-12mp-ios-15-apple/carrefouroficial/900007266/7ecff14cebcf4d724e8baa129230d9ba.jpeg",
            title: "Iphone 11",
            preco: "4.794,00"
        },
        {
            img: "https://a-static.mlcdn.com.br/800x560/iphone-12-apple-128gb-branco-tela-61-12mp-ios/magazineluiza/231147900/636b6503620bf4373e6ddf7e97ec6c0a.jpg",
            title: "Iphone 12",
            preco: "3.498,99"
        },
        {
            img: "https://a-static.mlcdn.com.br/800x560/apple-iphone-13-128gb-meia-noite-tela-61-12mp/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
            title: "Iphone 13",
            preco: "3.999,00"
        },
        {
            img: "https://a-static.mlcdn.com.br/800x560/apple-iphone-13-128gb-meia-noite-tela-61-12mp/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
            title: "Iphone 14",
            preco: "3.999,00"
        },
        {
            img: "https://a-static.mlcdn.com.br/800x560/apple-iphone-13-128gb-meia-noite-tela-61-12mp/magazineluiza/234661800/a57c1ab14765ab0b7ca87de98ba94b94.jpg",
            title: "Iphone 15",
            preco: "3.999,00"
        }
    ];

    return (
        <>
            <div className='banner'>  
                <h1>Promoções</h1>
            </div>
            <div className="Promotion">
            {iphone.map((item, index) => (
                <div key={index}>
                    <img src={item.img} alt="" />
                    <h2>{item.title}</h2>
                    <p>Preço: R${item.preco}</p>
                </div>
            ))}
            </div>
        </>
    );
}