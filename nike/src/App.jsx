import Weather from "./components/weather/Weather"
import Calculator from './components/calc/Calculator'
import TodoList from "./components/Todo/TodoList"
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <>
      <div className="flex flex-col justify-center overflow-y-auto space-y-5 items-center  p-10 min-h-[100vh] md:space-x-4 md:space-y-0 md:flex-row">
 
        


        <div className=" bg-blue-900 card">
          <Weather />
        </div>

        <div className="card bg-gray-200">
          <TodoList/>
        </div>
        
        <div className="card bg-amber-200">
          <Calculator/>
        </div>
        
      </div>
      
    </>
  )
}

export default App
