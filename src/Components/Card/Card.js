import { useState } from 'react';

const Card = ({ symbol, number, isFlipped }) => {
  const [flipped, setFlipped] = useState(isFlipped);

  const isNumber = !isNaN(number) || number === "A";
  const fixedSize = number === "A" ? 1 : number;

  const handleClick = () => {
    setFlipped(!flipped)
  }

  return (
    <div class={'card card-' + symbol + (isFlipped ? " flipped" : "")} number={number} onClick={handleClick}>
      <div class="card-front" >
        <div class="card-corner top-left">
          <div>{number}</div>
          <div>{symbol}</div>
        </div>
        <div class="symbols">
          {isNumber
            ? new Array(parseInt(fixedSize))
              .fill(symbol)
              .map((cardSymbol, i) => <div key={i}>{cardSymbol}</div>)
            : ""
          }
        </div>
        <div class="card-corner bottom-right">
          <div>{symbol}</div>
          <div>{number}</div>
        </div>
      </div>
      <div class="card-back">
      </div>
    </div>);
}

export default Card;
