import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

// DRY: Don't repeat yourself
const renderButtons = onClickNumber => {
    //var number = 0
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    //iterar desde el boton 1 hasta el 0 
    //<Button text={number.toString()} clickHandler={onClickNumber}/>
    const renderButton = number =>(
        <Button 
        key={number} 
        text={number.toString()} 
        clickHandler={onClickNumber}/> 
    )
    return numbers.map(renderButton)
}
const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>    
)
 Numbers.proptTypes = {
    onClickNumber: PropTypes.func.isRequired
 }
export default Numbers