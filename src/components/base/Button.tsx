import './base.css';

type ButtonParams = {
  text: string;
}

function Button({...params}: ButtonParams) {
  return (
    <button className="dor-button">
      { params.text }
    </button>
  );
}

export default Button;
