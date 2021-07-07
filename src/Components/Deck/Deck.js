import styles from './Deck.module.scss'
import Card from '../Card/Card';

export default function Deck({ title, cards }) {
  return (<>
    <div className={styles.roomTable}>
      <h2>{title}</h2>
      <div className={styles.cards}>
        {cards && cards.map(card => {
          return <Card key={card} symbol={card.slice(-1)} number={card.slice(0, -1)} isFlipped={false} />
        })}
      </div>
    </div>
  </>);
}