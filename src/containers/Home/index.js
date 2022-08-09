import React from "react";
import './style.css';

const Home = () => {
  let address;
  let isAccepted = false;
  let inputRef = React.createRef();
  let buttonRef = React.createRef();
  let underRef = React.createRef();

  const check = (text) => {
    console.log(text, address)
    const regex = new RegExp('[a-zA-Z0-9-]+@[a-zA-Z-]+\.com');

    if(regex.test(text)) {
      address = text;
      isAccepted = true;
    }
    else
      isAccepted = false;

    return isAccepted;
  }

  const handleSubmit = event => {
    console.log("form submitted");
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
    alert("A verification email for activating your account has been submitted to your address!");
    console.log(inputRef.current);
    inputRef.current.value = "";
    buttonRef.current.disabled = true;
  }

  const handleKeyUp = event => {
    if(check(event.target.value)) {
      console.log(buttonRef.current)
      buttonRef.current.disabled = false;
    } else {
      buttonRef.current.disabled = true;
    }
  }

  const handleClick = () => {
    console.log("buton apasat!");
    if(!isAccepted) {
      underRef.current.className = "under-form";
    } else {
      underRef.current.className = "under-form hidden";
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <div className="newsletter-subscribe">
            <input ref={inputRef} onClick={handleClick} onKeyUp={handleKeyUp} className="input" type="text" name="newsletter"/>  
            <button ref={buttonRef} onClick={handleClick} type="submit" className="input-button" disabled>Subscribe</button>
          </div>
          <p ref={underRef} className="under-form hidden">A valid email would be: example@domain.com</p>
        </div>
      </form>
    </div>
  )
};

export default Home;
