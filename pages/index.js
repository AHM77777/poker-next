import { useAppContext } from '../src/Context/AppContext'
import Deck from '../src/Components/Deck/Deck';

export default function Home() {
  const { table_cards, hand_cards } = useAppContext();

  return (
    <div className="App">
      <header className="App-header">
        <Deck title="Table" cards={table_cards} />
        <Deck title="Hand" cards={hand_cards} />
      </header>
    </div>
  )
}
