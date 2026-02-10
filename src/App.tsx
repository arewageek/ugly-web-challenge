import React, { useState, useEffect, useRef } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [btnPos, setBtnPos] = useState({ top: 400, left: 300 });
  const [inputValue, setInputValue] = useState("");
  const [isLagging, setIsLagging] = useState(false);

  // Unresponsive button: moves when hovered
  const handleBtnHover = () => {
    const newTop = Math.random() * (window.innerHeight - 100);
    const newLeft = Math.random() * (window.innerWidth - 100);
    setBtnPos({ top: newTop, left: newLeft });
  };

  // Delayed reaction for state change
  const handleIncrement = () => {
    setIsLagging(true);
    setTimeout(() => {
      setCount(prev => prev + 1);
      setIsLagging(false);
      alert("YOU CLICKED IT!!!! CONGRATS!!!!");
    }, 2000);
  };

  // Typing lag
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTimeout(() => {
      setInputValue(val);
    }, 500);
  };

  return (
    <div style={{ width: '4000px', height: '4000px' }}>
      <div className="marquee-container">
        <marquee scrollamount="20">
          WELCOME TO MY WEB-SITE !!! BEST VIEWED IN INTERNET EXPLORER 3.0 !!! <span className="blink">NEW!!!</span> NO COPYING ALLOWED !!!
        </marquee>
      </div>

      <h1 id="main-title">BEST SITE 2026</h1>

      <div style={{ position: 'absolute', top: '250px', left: '50px' }}>
        <p className="blink" style={{ fontSize: '50px' }}>FREE MONEY CLICK HERE --{'>'}</p>
        <button 
          className="button-wrong" 
          style={{ top: btnPos.top, left: btnPos.left }}
          onMouseEnter={handleBtnHover}
          onClick={handleIncrement}
        >
          {isLagging ? "LOADING..." : `CLICK ME: ${count}`}
        </button>
      </div>

      <div className="sidebar">
        AD AD AD AD AD
      </div>

      <table cellPadding="50">
        <tbody>
          <tr>
            <td>
              <h2>GUESTBOOK</h2>
              <textarea 
                className="unresponsive-input" 
                placeholder="sign here..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <p>Preview (slow): {inputValue}</p>
            </td>
            <td>
              <img src="https://web.archive.org/web/20090829103212/http://geocities.com/Athens/Olympus/9700/undercon.gif" alt="under construction" />
              <img src="https://web.archive.org/web/20091027005003im_/http://geocities.com/CollegePark/Lab/1543/baby2.gif" alt="dancing baby" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <div className="visitor-count">
                VISITOR NUMBER: 00000042
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '1000px', fontSize: '100px', color: 'blue' }}>
        YOU FOUND THE BOTTOM!!
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div id="overlay">SITE HACKED BY COOLDUDE69</div>
    </div>
  );
}

export default App;
