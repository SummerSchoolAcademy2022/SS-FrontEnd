import './style.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from 'react';
import ScreenSize from '../screenSize/ScreenSize';

export default function Footer() {

  const[isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const onExpandFooterMenu = () => {
    setIsOpen(!isOpen);
  }

  
  
  return (
    <footer>
    <ScreenSize />
    <div className="row">
      <div className="column newsletter-column">
        <h2 >NEWSLETTER</h2>
        <div id="buttons">
          <input
            id="buton-text"
            type="email"
            name="email"
            pattern="^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$"/>
          <input type="button" value="Subscribe" id="subscribe" />
        </div>
      </div>

      <div className="column">
        <div class="footer-title" onClick={onExpandFooterMenu}>
          <h2>USEFUL INFO</h2>

          <div className="arrow-icon">
            {
              isOpen ? (<FaChevronUp />) : (<FaChevronDown />)
            }


          </div>
        </div>

        {
          isOpen && (
            <div class="paragraphs" style={{maxHeight: "1000px"}}>
              <ul>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">Privacy policy</a>
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank"
                    >Terms AND Conditions</a
                  >
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank"
                    >Cookie Policy</a
                  >
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank"
                    >FAQs</a
                  >
                </li>
              </ul>
            </div>
          )
        }
        
      </div>

      <div className="column">
        <div className="footer-title" onClick={onExpandFooterMenu}>
          <h2>YOU CAN FIND US IN</h2>

          <div className="arrow-icon">
            {
              isOpen ? (<FaChevronUp />) : (<FaChevronDown />)
            }
          </div>

        </div>

        {
          isOpen && (
            <div class="paragraphs" style={{maxHeight: "1000px"}}>
          <ul>
            <li>
              <a href="https://ro.deloittedigital.com/" target="_blank">London, UK</a>
            </li>
            <li>
              <a href="https://ro.deloittedigital.com/" target="_blank"
                >Bucharest, RO</a
              >
            </li>
            <li>
              <a href="https://ro.deloittedigital.com/" target="_blank"
                >Paris, FR</a
              >
            </li>
            <li>
              <a href="https://ro.deloittedigital.com/" target="_blank"
                >Sofia, BG</a
              >
            </li>
          </ul>
        </div>
          )
        }
        
      </div>

      <div className="column">
        <div class="footer-title" onClick={onExpandFooterMenu}>
          <h2>ABOUT GELATO & DONUTS</h2>

          <div class="arrow-icon">
            {
              isOpen ? (<FaChevronUp />) : (<FaChevronDown />)
            }
          </div>

        </div>

        {
          isOpen && (
            <div class="paragraphs" style={{maxHeight: "1000px"}}>
          <ul>
            <li>
              <a href="https://ro.deloittedigital.com/" target="_blank"
                >About us</a
              >
            </li>
            <li>
              <a href="https://ro.deloittedigital.com/" target="_blank"
                >Store locator</a
              >
            </li>
            <li>
              <a href="https://ro.deloittedigital.com/" target="_blank"
                >Franchise</a
              >
            </li>
            <li>
              <a href="https://ro.deloittedigital.com/" target="_blank"
                >Careers</a
              >
            </li>
            <li>
              <a href="https://ro.deloittedigital.com/" target="_blank"
                >Contact us</a
              >
            </li>
          </ul>
            </div>
          )
        }

      </div>
    </div>

    <div id="tm">@2021 Gelato & Donuts.</div>
  </footer>
  )
}
 