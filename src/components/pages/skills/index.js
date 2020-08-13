import React from 'react';
import { CircleProgress } from 'react-gradient-progress';
import './styles.css';


const Habilidades = () => {
  return (

    <div className="progresso">
      <h2>Habilidades</h2>
      <div className="progresHabilidades">
        <div className="percetual">
          <strong>HTML</strong>
          <CircleProgress
            percentage={85}
            strokeWidth={5}
            width={70}
            fontSize={20}
            secondaryColor="#f0f0f0"
            primaryColor={["#6A5ACD", "#6A5ACD"]}
          />
        </div>
        <div className="percetual">
          <strong>CSS</strong>
          <CircleProgress
            percentage={80}
            strokeWidth={5}
            width={70}
            fontSize={20}
            secondaryColor="#f0f0f0"
            primaryColor={["#6A5ACD", "#6A5ACD"]}
          />
        </div>
        <div className="percetual">
          <strong>JAVASCRIPT</strong>
          <CircleProgress
            percentage={75}
            strokeWidth={5}
            width={70}
            fontSize={20}
            secondaryColor="#f0f0f0"
            primaryColor={["#6A5ACD", "#6A5ACD"]}
          />
        </div>
        <div className="percetual">
          <strong>REACTJS</strong>
          <CircleProgress
            percentage={60}
            strokeWidth={5}
            width={70}
            fontSize={20}
            secondaryColor="#f0f0f0"
            primaryColor={["#6A5ACD", "#6A5ACD"]}
          />
        </div>
        <div className="percetual">
          <strong>REACT NATIVE</strong>
          <CircleProgress
            percentage={50}
            strokeWidth={5}
            width={70}
            fontSize={20}
            secondaryColor="#f0f0f0"
            primaryColor={["#6A5ACD", "#6A5ACD"]}
          />
        </div>
        <div className="percetual">
          <strong>NODEJS</strong>
          <CircleProgress
            percentage={60}
            strokeWidth={5}
            width={70}
            fontSize={20}
            secondaryColor="#f0f0f0"
            primaryColor={["#6A5ACD", "#6A5ACD"]}
          />
        </div>
      </div>
    </div>

  );
}
export default Habilidades;