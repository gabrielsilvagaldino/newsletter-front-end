import Button from "../components/button"
import { useContext } from "react"
import Context from "../context"

function Success() {
  const obj = useContext(Context)

  return  (
    <div>
      <h1>Thanks for subscribing!</h1>
      <p>{ `A confirmation email has sent to ${obj.email}. Please open it and click the button inside to confirm your subscription ` }</p>
      <img src="/assets/images/icon-success.svg" alt="success-icon" />
      <Button name="Dismiss message"/>
    </div>
  )
}

export default Success