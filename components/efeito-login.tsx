import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const topRadius = width *0.57; //modifica o tamanho da parte superior
const bottomRadius = width *0.8; // modifica o tamanho da parte inferior

export default function CurvedCirclesBackground() {
  return (
    <Svg
      width={width}
      height={height}
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      {/* Círculo azul superior direito */}
      <Circle
        cx={width}// movimenta a parte horizontal da cor laranja do lado direito
        cy={-25}//movimenta a altura do lado direito laranja 
        r={topRadius}
        fill="#FF6A00"
      />

      {/* Círculo laranja superior direito */}
      <Circle
        cx={0}// movimenta a parte horizontal da cor azul do lado esquerdo
        cy={-70}//movimenta a altura do lado direito azul 
        r={topRadius}
        fill="#0099FF"
      />

      {/* Círculo laranja inferior esquerdo */}
      <Circle
        cx={-160} //movimenta a largura ao lado esquerdo inferior.
        cy={870}//movimenta a altura do lado esquerdo  em relação a altura
        r={bottomRadius}
        fill="#FF6A00"
      />

      {/* Círculo azul inferior direito */}
      <Circle
        cx={430} // movimenta a parte horizontal da cor azul do lado inferior da tela
        cy={940} //movimenta a altura do lado direito azul em relação a altura
        r={bottomRadius}
        fill="#0099FF"
      />
    </Svg>
  );
}
