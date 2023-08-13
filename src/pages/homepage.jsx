import { useState, useEffect } from "react";
import Button from "../components/button"
import Input from "../components/input"
import '../styles/homepage.css'


function Homepage() {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const atualizarResolucao = () => {
      setLargura(window.innerWidth);
    };

    window.addEventListener('resize', atualizarResolucao);
    return () => {
      window.removeEventListener('resize', atualizarResolucao);
    };
  }, []);

  return (
    <div id="main-container">
      {largura < 769 ? <div> 
        <img id="illustration-container" src="/assets/images/illustration-sign-up-mobile.svg" alt="illustration" />
      </div> : null}
      <div id="inner-container">
        <div id="tittle">
          <h1>Stay updated!</h1>
        </div>
        <div>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div>
          <ul id="ul-container">
            <li className="custom-li">Product discovery and building what matters</li>
            <li className="custom-li">Mesasuring to ensure updates are a success</li>
            <li className="custom-li">And much more!</li>
          </ul>
        </div>
        <div id="user-container">
          <Input/>
          <br/>
          <Button name='Subscribe for monthly newsletter'/>
        </div>
      </div>
      {largura > 768 ? <div> 
        <img id="illustration-container" src="/assets/images/illustration-sign-up-desktop.svg" alt="illustration" />
      </div> : null}
    </div>
  )
}

export default Homepage