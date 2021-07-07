import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [currentCards, setCurrentCards] = useState([])
  const [tableCards, setTableCards] = useState([]);
  const [handCards, setHandCards] = useState([]);

  useEffect(async () => {
    const deck = await fetch('http://localhost:3000/api/cards')
    const data = await deck.json()

    setCurrentCards(data.deck.current_cards)
    setTableCards(data.deck.table_cards)
    setHandCards(data.player.current_hand)
  }, []);

  const state = {
    current_cards: currentCards,
    table_cards: tableCards,
    hand_cards: handCards
  };

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext)
}
