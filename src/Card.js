import React from 'react';

const Card = ({name, email, id}) => {
    //Can only Return one thing, here we are only returning a single div element with more elements inside
    
    return (
        
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow shadow-5 '>
           <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
           <div>
             <h2>{name}</h2> 
             <p>{email}</p>  
           </div>
        </div>
    );
    
};

export default Card;