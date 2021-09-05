import React,{useState} from "react"
import Dashboard from "./components/Dashboard";


function App() {
  const [navigation, setNavigation] = useState("dashboard");
  return (<div style={{height: "100vh"}}>
    <Dashboard handleClick={setNavigation}/>
    </div>
  )
}

export default App;