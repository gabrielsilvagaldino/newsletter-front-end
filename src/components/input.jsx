import { useContext } from "react"
import Context from "../context"

function Input() {
  const obj = useContext(Context);

  return (
    <label htmlFor="input">
      <span id="email-label">Email address</span>
      { obj.validEmail === false ? <span id="error-label">Valid email required</span> : null }
      <br/>
      <input type="email" placeholder="email@company.com" id={obj.input} onChange={ obj.emailOnChange }/>
    </label>
  )
}

export default Input