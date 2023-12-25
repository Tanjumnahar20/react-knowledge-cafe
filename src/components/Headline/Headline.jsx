/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Headline = () => {
    const [headlines,setHeadline] =useState([]);

    useEffect(()=>{
        fetch('info.json')
        .then(res=>res.json())
        .then(data=>setHeadline(data))
    },[])
     
    
    return (
        <div>
            {
               headlines.map(headline=>console.log( 'h',headline))
            }
        
        </div>
    );
};

export default Headline;