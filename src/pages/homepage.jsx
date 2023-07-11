import Button from "../components/button"
import Input from "../components/input"

function Homepage() {
  return (
    <div>
      <div>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Mesasuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <Input/>
        <Button name='Subscribe for monthly newsletter'/>
      </div>
      <div>
        <img src="/assets/images/illustration-sign-up-desktop.svg" alt="illustration" />
      </div>
    </div>
  )
}

export default Homepage