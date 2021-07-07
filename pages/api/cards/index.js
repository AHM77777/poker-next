import Cards from '../../../src/Entities/Cards'

function handler(req, res) {
  if (!Cards.getDeck(0)) {
    Cards.generateDeck()
  }

  // Dispatch cards from deck
  const current_hand = Cards.dispatchCards(0);
  const deck = Cards.getDeck(0)
  res.json({
    deck,
    player: { current_hand }
  })
}

export default handler