import { useAppContext } from '../src/Context/AppContext'
import Deck from '../src/Components/Deck/Deck';

export default function Home() {
  const { table_cards, hand_cards } = useAppContext();

  return (
    <div className="App">
      <header className="App-header">
        <div className="room-table">
          <Deck title="Table" cards={table_cards} />
        </div>
        <div className="room-table">
          <Deck title="Hand" cards={hand_cards} />
        </div>
      </header>
    </div>
  )
}
