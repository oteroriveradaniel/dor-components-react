import { MouseEventHandler } from 'react';
import './base.css';

type ButtonParams = {
  text: string;
  onClick: MouseEventHandler;
}

function Button({...params}: ButtonParams) {
  return (
    <button 
      className="dor-button" 
      onClick={params.onClick}>
      { params.text }
    </button>
  );
}

export default Button;
