import { useState, type ChangeEvent } from 'react';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const [btnPos, setBtnPos] = useState({ top: 500, left: 500 });
  const [inputValue, setInputValue] = useState("");
  const [popupVisible, setPopupVisible] = useState(true);
  const [closeBtnPos, setCloseBtnPos] = useState({ top: 5, right: 5 });

  // Extremely unresponsive button: jumps on hover AND random click failure
  const handleBtnHover = () => {
    setBtnPos({
      top: Math.random() * (window.innerHeight - 50),
      left: Math.random() * (window.innerWidth - 100)
    });
  };

  const handleBtnClick = () => {
    // 90% chance to do nothing, 10% chance to alert and lag
    if (Math.random() > 0.1) {
      console.log("CLICK IGNORED BY SYSTEM");
      return;
    }
    
    setTimeout(() => {
      setCount(c => c + 1);
      alert("WARNING: SYSTEM STABILITY AT 2%");
    }, 5000); // 5 second lag
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    // Artificial typing delay of 3 seconds
    setTimeout(() => {
      setInputValue(val);
    }, 3000);
  };

  const moveCloseBtn = () => {
    setCloseBtnPos({
      top: Math.random() * 95,
      right: Math.random() * 95
    });
  };

  return (
    <div style={{ position: 'relative', width: '2000px', height: '2000px' }}>
      {/* Dirty Stains */}
      <div className="stain" style={{ top: '10%', left: '20%', width: '400px', height: '300px' }} />
      <div className="stain" style={{ top: '60%', right: '10%', width: '500px', height: '500px', background: 'rgba(0,100,0,0.2)' }} />

      <div className="marquee-container">
        {/* @ts-ignore */}
        <marquee scrollamount="1" direction="down">
          error error error error error error error error error help help help me
        {/* @ts-ignore */}
        </marquee>
      </div>

      <h1>THIS IS NOT A WEBSITE</h1>

      <div style={{ position: 'absolute', top: '200px', left: '100px' }}>
        <h2 className="blink">VERY FAST LOADING...</h2>
        <button 
          className="button-wrong"
          style={{ top: btnPos.top, left: btnPos.left }}
          onMouseEnter={handleBtnHover}
          onClick={handleBtnClick}
        >
          {count > 0 ? `FAILURES: ${count}` : "CLICK TO DESTROY"}
        </button>
      </div>

      {popupVisible && (
        <div className="fake-popup">
          <button 
            className="close-btn" 
            style={{ top: `${closeBtnPos.top}%`, right: `${closeBtnPos.right}%` }}
            onMouseEnter={moveCloseBtn}
            onClick={() => setPopupVisible(false)}
          >
            x
          </button>
          <div style={{ color: 'red', fontSize: '10px' }}>
            CRITICAL SYSTEM ERROR: MOUSE TOO FAST
            <br />
            Please wait 48 hours for the 'X' button to become clickable.
            <br />
            {Array(500).fill("ERROR ").join("")}
          </div>
        </div>
      )}

      <div style={{ position: 'absolute', top: '1000px', left: '500px', border: '50px solid black' }}>
        <p style={{ color: '#000', background: '#3e3e00' }}>SIGN HERE FOR FREE TAXES:</p>
        <textarea 
          className="unresponsive-input"
          onChange={handleInputChange}
          placeholder="your soul here..."
        />
        <div style={{ fontSize: '100px', color: 'red', transform: 'scaleX(-1)' }}>
          {inputValue}
        </div>
      </div>

      <table>
        <tbody>
          <tr>
            <td>
              {/* @ts-ignore */}
              <marquee>GOING NOWHERE FAST</marquee>
            </td>
            <td>
              <div className="blink">DEAD END</div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Hidden high-volume iframe logic could go here but let's keep it to visual ugliness */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', border: '100px ridge #ffffff', pointerEvents: 'none' }} />
    </div>
  );
}

export default App;
