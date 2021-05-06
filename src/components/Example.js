import React from 'react';

// useState (hook)

function Example() {
    console.log('Example just rendered');
    
    const onClickHandler = () => {
        console.log(1);
        // ....
    }; 
    
    return (
        <div>
            <span>soy pan</span>
            <button onClick={onClickHandler}>boton</button>
        </div>
    );
}

// const Example = () => {}; 

// export { Example }; // nombrado (export)
export default Example;
