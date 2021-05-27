//impotación
/* eslint no-eval: 0 */
import React, { useState  } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from "./components/MathOperations"
import Numbers from "./components/Numbers"
import Result from './components/Result'
import './App.css'


//generación de la función del componente
//arrow Function
const App = () => {
    // Array Destructuring 
    // const [texto, funcionModificaTexto]= useState("")
    const [stack, setStack]= useState("")


    const items = words(stack, /[^-^+^*^/]+/g)
    //lo que ejecuta la función
    const value = items.length > 0 ? items[items.length-1] : "0";
    return (
    <main className='react-calculator'>
        <Result value={value} /> 
        <div className='numbers'>
            <Numbers onClickNumber={number => 
            setStack(`${stack}${number}`) 
            }/>
        </div>
            <Functions 
            onContentClear={clear => setStack('')}
            onDelete={() => {
                if ( stack.length > 0 ){
                const newStack = stack.substring(0, stack.length - 1)
                setStack(`${newStack}`)
            }
                }}/>
            <MathOperations onClickOpertaion={operation => 
                setStack(`${stack}${operation}`)
            }
                onClickEqual= {equal => 
                    setStack(eval(stack).toString())
            }/>
    </main>)
    }
//exportación
export default App