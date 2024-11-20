import Weather from "./components/weather/Weather"
import Calculator from './components/calc/Calculator'

function App() {

  return (
    <>
      <div className="flex space-x-5 items-center justify-center  p-10">

        <div className=" bg-blue-900 rounded-2xl p-4">
          <Weather />
        </div>
        
        <Calculator/>
      </div>
      
    </>
  )
}

export default App
