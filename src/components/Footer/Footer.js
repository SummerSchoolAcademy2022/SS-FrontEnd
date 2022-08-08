import "./style.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import useScreenSize from "../../hooks/useScreenSize";

export default function Footer() {
  const [isOpenUseful, setIsOpenUseful] = useState(false);
  const [isOpenFind, setIsOpenFind] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);

  const onExpandUseful = () => {
    setIsOpenUseful(!isOpenUseful);
  };
  const onExpandFind = () => {
    setIsOpenFind(!isOpenFind);
  };
  const onExpandAbout = () => {
    setIsOpenAbout(!isOpenAbout);
  };

  const screenSize = useScreenSize(true);

  useEffect(() => {
    if (screenSize !== "mobile") {
      setIsOpenUseful(true);
      setIsOpenFind(true);
      setIsOpenAbout(true);
    } else {
      setIsOpenUseful(false);
      setIsOpenFind(false);
      setIsOpenAbout(false);
    }
  }, [screenSize]);

  return (
    <footer>
      {/* <div>Is Mobile: {screenSize}</div> */}
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
          <div className="footer-title" onClick={onExpandUseful}>
            <h2>USEFUL INFO</h2>

            <div className="arrow-icon">
              {isOpenUseful ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpenUseful && (
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
          <div className="footer-title" onClick={onExpandFind}>
            <h2>YOU CAN FIND US IN</h2>

            <div className="arrow-icon">
              {isOpenFind ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpenFind && (
            <div className="paragraphs" style={{ maxHeight: "1000px" }}>
              <ul>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    London, UK
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bucharest, RO
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Paris, FR
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sofia, BG
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="column">
          <div className="footer-title" onClick={onExpandAbout}>
            <h2>ABOUT GELATO & DONUTS</h2>

            <div className="arrow-icon">
              {isOpenAbout ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>

          {isOpenAbout && (
            <div className="paragraphs" style={{ maxHeight: "1000px" }}>
              <ul>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Store locator
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Franchise
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://ro.deloittedigital.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
