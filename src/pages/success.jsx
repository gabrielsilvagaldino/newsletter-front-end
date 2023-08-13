import Button from "../components/button"
import { useContext } from "react"
import Context from "../context"
import "../styles/success.css"

function Success() {
  const obj = useContext(Context)

  return  (
    <div id="success-container">
      <div id="content">
        <img id="success-icon" src="/assets/images/icon-success.svg" alt="success-icon" />
        <h1 id="success-title">Thanks for subscribing!</h1>
        <div id="success-text">
          <p>A confirmation email has been sent to <b>{obj.email}</b>. Please open it and click the button inside to confirm your subscription.</p>
        </div>
        <div id="button">
          <Button name="Dismiss message"/>
        </div>
      </div>
    </div>
  )
}

export default Success