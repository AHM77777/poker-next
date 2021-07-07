//import styles from './Deck.module.scss';
import Card from '../Card/Card';

const Deck = ({ title, cards }) => {
  return (<>
    <div>
      <h2>{title}</h2>
      {cards && cards.map(card => {
        return <Card key={card} symbol={card.slice(-1)} number={card.slice(0, -1)} />
      })}
    </div>
  </>);
}

export default Deck;