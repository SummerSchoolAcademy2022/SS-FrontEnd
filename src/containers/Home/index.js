import React from "react";
import './style.css';

const Home = () => {
  let address;
  let isAccepted = false;
  let inputRef = React.createRef();
  let buttonRef = React.createRef();

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

  const handleSubmit = (e) => {
    console.log("form submitted");
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    alert("A verification email for activating your account has been submitted to your address!");
    console.log(inputRef.current);
    inputRef.current.value = "";
    buttonRef.current.disabled = true;
  }

  const handleKeyUp = (e) => {
    if(check(e.target.value)) {
      console.log(buttonRef.current)
      buttonRef.current.disabled = false;
    } else {
      buttonRef.current.disabled = true;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="newsletter-subscribe">
          <input ref={inputRef} onKeyUp={handleKeyUp} className="input" type="text" name="newsletter"/>  
          <button ref={buttonRef} type="submit" className="input-button" disabled>Subscribe</button>
        </div>
      </form>
    </div>
  )
};

export default Home;
