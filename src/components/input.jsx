import { useContext } from "react"
import Context from "../context"

function Input() {
  const obj = useContext(Context);

  return (
    <label htmlFor="input">
      <span>Email address</span>
      <input type="email" id="input" onChange={ obj.emailOnChange }/>
    </label>
  )
}

export default Input