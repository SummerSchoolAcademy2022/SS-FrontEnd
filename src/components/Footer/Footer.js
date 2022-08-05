import "./style.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  const onExpandFooterMenu = () => {
    setIsOpen(!isOpen);
  };

  const screenSize = useScreenSize();

  return (
    <footer>
      <div>Is Mobile: {screenSize}</div>
      <div className="row">
        <div className="column newsletter-column">
          <h2>NEWSLETTER</h2>
          <div id="buttons">
            <input
              id="buton-text"
              type="email"
              name="email"
              pattern="^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$"
            />
            <input type="button" value="Subscribe" id="subscribe" />
          </div>
        </div>

        <div className="column">
          <div className="footer-title" onClick={onExpandFooterMenu}>
            <h2>USEFUL INFO</h2>

            <div className="arrow-icon">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpen && (
            <div className="paragraphs" style={{ maxHeight: "1000px" }}>
              <ul>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Terms AND Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="column">
          <div className="footer-title" onClick={onExpandFooterMenu}>
            <h2>YOU CAN FIND US IN</h2>

            <div className="arrow-icon">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpen && (
            <div className="paragraphs" style={{ maxHeight: "1000px" }}>
              <ul>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">
                    London, UK
                  </a>
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">
                    Bucharest, RO
                  </a>
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">
                    Paris, FR
                  </a>
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">
                    Sofia, BG
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="column">
          <div className="footer-title" onClick={onExpandFooterMenu}>
            <h2>ABOUT GELATO & DONUTS</h2>

            <div className="arrow-icon">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpen && (
            <div className="paragraphs" style={{ maxHeight: "1000px" }}>
              <ul>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">
                    About us
                  </a>
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">
                    Store locator
                  </a>
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">
                    Franchise
                  </a>
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="https://ro.deloittedigital.com/" target="_blank">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div id="tm">@2021 Gelato & Donuts.</div>
    </footer>
  );
}
