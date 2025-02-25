import React from 'react';
import './Partners.css';

export default function Partners() {
    return (
        <div className="partners">
            <p>Partnered Bus Service Providers</p>
            <div className="row1">
                <img src={require('../assets/images/partners/annaimuthumari.png')} alt="Annai Muthumari" />
                <img src={require('../assets/images/partners/ncg.png')} alt="NCG" />
                <img src={require('../assets/images/partners/superline.png')} alt="Superline" />
                <img src={require('../assets/images/partners/surrexi.png')} alt="Surrexi" />
                <img src={require('../assets/images/partners/al-rashith.png')} alt="Al Rashith" />
            </div>
            <div className="row2">
                <img src={require('../assets/images/partners/facepack-transport.png')} alt="Facepack Transport" />
                <img src={require('../assets/images/partners/new-way-express.png')} alt="New Way Express" />
                <img src={require('../assets/images/partners/soyuru-sampath-superline.png')} alt="Soyuru Sampath Superline" />
                <img src={require('../assets/images/partners/suncity-express.png')} alt="Suncity Express" />
                <img src={require('../assets/images/partners/wijesuriya-highway-express.png')} alt="Wijesuriya Highway Express" />
            </div>
        </div>
    );
}
