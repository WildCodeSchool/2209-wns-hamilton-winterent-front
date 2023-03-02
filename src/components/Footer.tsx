import React from 'react';
import logoWinterent from "../../src/assets/logoWinterent.png"
import botomFooter from "../../src/assets/botomFooter.png"
import "./Footer.scss"

const Footer = () => {
    return (
        <div>
            <div className='title'>
                <div className='title__img1'>
                    <img src={logoWinterent} alt="" />
                    <div className='title__img1'>
                        <p>34 Rue Des Pommes - Lyon, Cedex 30000</p>
                        <p>info@Winterent.Com</p>
                        <div className='title__img1__logo'>
                            <a href="https://www.facebook.com/">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com/home">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/feed/">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                   
                   
                </div>
                <div className='mt-4'>
                    <h6>CATALOG</h6>
                    <p>Ski</p>
                    <p>Snow</p>
                    <p>Skatting</p>
                    <p>Randonée</p>
                    <p>Autres</p>
                </div>
                <div className='mt-4'>
                    <h6>ABOUT US</h6>
                    <p>Our Producters</p>
                    <p>Sitemap</p>
                    <p>FAQ</p>
                    <p>About Us</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className='mt-4'>
                    <h6>CUSTOMER SERVICES</h6>
                    <p>Contact Us</p>
                    <p>Track Your Odrer</p>
                    <p>Product CAre & Repair</p>
                    <p>Bock An Appointment</p>
                    <p>Shipping & Returns</p>
                </div>
          
            </div>
      
        </div>
    );
};

export default Footer;