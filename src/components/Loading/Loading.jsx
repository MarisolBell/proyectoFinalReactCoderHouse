import React from 'react';
import { ScaleLoader } from 'react-spinners';
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <ScaleLoader 
        color="black" 
        height={35} 
        width={4}   
        radius={2}  
        margin={2}  
      />
    </div>
  );
};

export default Loading;
