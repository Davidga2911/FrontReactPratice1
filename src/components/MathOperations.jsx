import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const MathOperations = ({onClickOpertaion, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOpertaion}/>
        <Button text="-" clickHandler={onClickOpertaion}/>
        <Button text="*" clickHandler={onClickOpertaion}/>
        <Button text="/" clickHandler={onClickOpertaion}/>
        <Button text="=" clickHandler={onClickEqual}/>
    </section>
)

MathOperations.propTypes = {
    onClickOpertaion: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired   
}

export default MathOperations