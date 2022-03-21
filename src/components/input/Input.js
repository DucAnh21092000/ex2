import React from 'react';

function Input(props) {
    const className= props.className
    const placeHolder = props.placeholder
    const type = props.type
    const value= props.value
    const callBack = props.callback
    return (
        <React.Fragment>
            <input type={type}
                   className={className}
                   placeholder={placeHolder}
                   onChange={callBack}
                   value={value}
            />
        </React.Fragment>
    );
}

export default Input;