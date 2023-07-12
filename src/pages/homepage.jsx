import Button from "../components/button"
import Input from "../components/input"
import '../styles/homepage.css'


function Homepage() {
  return (
    <div id="main-container">
      <div id="inner-container">
        <div id="tittle">
          <h1>Stay updated!</h1>
        </div>
        <div>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div>
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Mesasuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>
        <Input/>
        <Button name='Subscribe for monthly newsletter'/>
      </div>
      <div id="illustration-container">
        <img src="/assets/images/illustration-sign-up-desktop.svg" alt="illustration" />
      </div>
    </div>
  )
}

export default Homepage