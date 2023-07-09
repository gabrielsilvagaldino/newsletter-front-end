import { useContext } from "react";
import Context from './context/index';
import Homepage from "./pages/homepage";

function App() {
  const obj = useContext(Context)

  return (
    obj.validEmail && obj.email.length > 0 ? (
    <div>alo</div>
    ) : (
      <div>
        <Homepage/> 
      </div>
    )
  );
}

export default App;
