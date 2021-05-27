import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'


const renderButtons = onClickNumber => {

    const numbers = [7,8,9,4,5,6,1,2,3,0]

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