/* eslint-disable no-unused-vars */
import React from 'react';
import './Content.css'
import Headline from '../Headline/Headline';

const Content = () => {
    return (
     <div className='body'>
        <div className='container'>
            <div>
   <h1>content</h1>
   <Headline></Headline>
            </div>
            <div className='bookmark'>
    <h2>saved item</h2>
            </div>
             </div>
     </div>
     
    );
};

export default Content;