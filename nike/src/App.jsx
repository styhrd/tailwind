import Weather from "./components/weather/Weather"
import Calculator from './components/calc/Calculator'
import TodoList from "./components/Todo/TodoList"
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <>
      <div className="flex space-x-5 items-center justify-center  p-10 h-[100vh]">

        <div className=" bg-blue-900 card">
          <Weather />
        </div>

        <div className="card bg-gray-200">
          <TodoList/>
        </div>
        
        <div>
          <Calculator/>
        </div>
        
      </div>
      
    </>
  )
}

export default App
