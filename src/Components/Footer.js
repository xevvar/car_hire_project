import React from "react";
import "./Footer.css";

function Footer () {

    return (
      <section className="footer">
        <hr className="footer-seperator" />
        <section className="footer-info">
          <section className="footer-info-left">
            <section className="footer-info__name">
                Car Rentals
            </section>
            <section className="footer-info__returns">
              <br />
              Returns Policy
            </section>        
          </section>
          <section className="footer-info-center">
            <section className="footer-info__email">
              car.rentals@gmail.com
            </section>
            <section className="footer-info__terms">
              <br />
              Terms and Conditions
            </section>
          </section>
          <section className="footer-info-right">
            <section className="footer-info__number">
              +254 721234567
            </section>
            <section className="footer-info__contact">
              <br />
              Contact Us
            </section>
          </section>
        </section>
        <hr className="footer-seperator" />
      </section>
    )
  
  }
  

export default Footer;