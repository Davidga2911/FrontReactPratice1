//impotación
import React from 'react'
import Functions from './components/Functions'
import MathOperations from "./components/MathOperations"
import Numbers from "./components/Numbers"
import Result from './components/Result'
import './App.css'


//generación de la función del componente
//arrow Function
const App = () => {
    //lo que ejecuta la función
    console.log("Renderizacionde App")
    return (
    <main className='react-calculator'>
        <Result  /> 
        <div className='numbers'>
            <Numbers onClickNumber={number =>
            console.log(number)}/>
        </div>
            <Functions onContentClear={clear => 
            console.log("Conten Clear")}
            onDelete={() =>
            console.log("onDelete")}/>

            <MathOperations onClickOpertaion={operation => 
                console.log("Operation:", operation)
            }
                onClickEqual= {equal => 
                console.log("Equal", equal )
            }/>
    </main>)
    }
//exportación
export default App