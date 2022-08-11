import "./style.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import React from "react";

export default function Footer() {
  const [isOpenUseful, setIsOpenUseful] = useState(false);
  const [isOpenFind, setIsOpenFind] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [emailError, setEmailError] = useState(false);

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


  const [email, setEmail] = useState(" ");

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isValid(email)) {
      alert(`You have successfully subscribed to our newsletter with this email adress: ${email}`);
    }
    else {
      alert("Invalid email adress");
    }
  }

  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  function isValid(text) {
    if (regex.test(text))
      return true;
    return false;
  }

  let inputRef = React.createRef();
  let buttonRef = React.createRef();
  let errorRef = React.createRef();

  const checkEmailFormat = (email) => {
    const regex = new RegExp("[a-zA-Z0-9-]+@[a-zA-Z-]+.com");

    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const handleClick = () => {
    const checkEmail = checkEmailFormat(inputRef?.current?.value);
    if (checkEmail) {
      setEmailError(false);
      alert(
        "A verification email for activating your account has been submitted to your address!"
      );
      inputRef.current.value = "";
    } else {
      setEmailError(true);
    }
  };

  return (
    <footer>
      <div className="row">
        <div className="column newsletter-column">
          <h2>NEWSLETTER</h2>
          <form id="buttons" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              id="buton-text"
              onChange={handleChange}
              type="email"
              pattern="^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$"
              value={email}
            />
             <input
              ref={buttonRef}
              onClick={handleClick}
              type="button"
              value="Subscribe"
              id="subscribe"
            />
            
            {emailError && (
            <p ref={errorRef} className="errorMail">
              A valid email would be: example@domain.com
            </p>
          )}
          </form>
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
