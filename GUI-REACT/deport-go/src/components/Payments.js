import React from 'react';
import './Payments.css';
import visa from '../assets/images/4/visacard-96.png';
import amex from '../assets/images/4/amexcard-96.png';
import mastercard from '../assets/images/4/mastercard-96.png';
import genie from '../assets/images/4/genie.png';
import moneyTransfer from '../assets/images/4/moneytrasnfer-96.png';

export default function Payments() {
    return (
        <div className="payments" id="partners-section">
            <p className="payments-title">Partnered Bus Service Providers</p>
            <div className="payments-container">
                <img src={visa} alt="Visa" />
                <img src={amex} alt="American Express" />
                <img src={mastercard} alt="MasterCard" />
                <img src={genie} alt="Genie" />
                <img src={moneyTransfer} alt="Money Transfer" />
            </div>
        </div>
    );
}
