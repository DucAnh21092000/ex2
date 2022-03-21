import React from 'react';

function Button(props) {
    const className= props.className
    const type = props.type
    const value= props.value
    const callBack = props.callback
    const src = props.src
    return (
        <React.Fragment>
            <button type={type} className={className} >
                <a href={src}>
                    {value}
                </a>
            </button>
        </React.Fragment>
    );
}

export default Button;