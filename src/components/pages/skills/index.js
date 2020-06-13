import React from 'react';
import {CircleProgress} from 'react-gradient-progress';
import './styles.css';


const Habilidades= () => {
  return(
  
    <div className="progresso">
      <h2>Habilidades</h2>
      <div className="progresHabilidades">
          <div className="percetual">
            <strong>HTML</strong>
            <CircleProgress 
            percentage={80} 
            strokeWidth={8} 
            width={80} 
            secondaryColor="#f0f0f0" 
            primaryColor={["#59C173","#5D26C1"]}  
            /> 
          </div>
          <div className="percetual">
            <strong>CSS</strong>
            <CircleProgress
             percentage={70}
             strokeWidth={8} 
             width={80} 
             secondaryColor="#f0f0f0" 
             primaryColor={["#59C173","#5D26C1"]}  
               /> 
            </div>
          <div className="percetual">
            <strong>JAVASCRIPT</strong>
            <CircleProgress
             percentage={70} 
             strokeWidth={8} 
             width={80} 
             secondaryColor="#f0f0f0" 
             primaryColor={["#59C173","#5D26C1"]}  
              /> 
          </div>
          <div className="percetual">
            <strong>REACTJS</strong>
            <CircleProgress 
            percentage={60} 
            strokeWidth={8} 
            width={80} 
            secondaryColor="#f0f0f0" 
            primaryColor={["#59C173","#5D26C1"]}  
             /> 
          </div>
          <div className="percetual">
            <strong>REACT NATIVE</strong>
            <CircleProgress 
            percentage={60} 
            strokeWidth={8} 
            width={80} 
            secondaryColor="#f0f0f0" 
            primaryColor={["#59C173","#5D26C1"]}  
             /> 
          </div>
       </div>
    </div>
   
  );
}
export default Habilidades;