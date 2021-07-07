import { useEffect, useState } from 'react';
import styles from './Card.module.scss'

function Card({ symbol, number, isFlipped }) {
  const [flipped, setFlipped] = useState(isFlipped);

  const isNumber = !isNaN(number) || number === "A";
  const fixedSize = number === "A" ? 1 : number;

  function handleClick() {
    setFlipped(!flipped);
  }

  return (<>
    <div className={styles.card + ' ' + (flipped ? styles.flipped : '')} symbol={symbol} number={number} onClick={handleClick}>
      <div className={styles.cardFront}>
        <div className={styles.cardCorner + " " + styles.topLeft}>
          <div>{number}</div>
          <div>{symbol}</div>
        </div>
        <div className={styles.symbols}>
          {isNumber
            ? new Array(parseInt(fixedSize))
              .fill(symbol)
              .map((cardSymbol, i) => <div key={i}>{cardSymbol}</div>)
            : ''
          }
        </div>
        <div className={styles.cardCorner + ' ' + styles.bottomRight}>
          <div>{symbol}</div>
          <div>{number}</div>
        </div>
      </div>
      <div className={styles.cardBack}></div>
    </div>
  </>);
}

export default Card;