
import AgeCalculatorForm from "./components/AgeCalculatorForm"
import AgeResult from "./components/AgeResult"

function App() {

  const calculateAge=()=>{
    console.log("calculate age")
  }

  return (
    <div>
      <h1>App</h1>
      <AgeCalculatorForm calculateAge={calculateAge}></AgeCalculatorForm>
      <AgeResult></AgeResult>
    </div>
  )
}

export default App
