import React from 'react';

//props
//state
//children *

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border:'3.5px solid green', height:'500px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;