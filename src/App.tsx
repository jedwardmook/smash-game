import { useEffect, useState } from 'react'
import './App.css'
import GameSpinner from './components/GameSpinner'
import SpinResult from './SpinResult'
import Standings from './components/Standings'
// import GameBoard from './components/GameBoard'

const App = () => {
  const [movement, setMovement] = useState<number>()
  const [message, setMessage] = useState<string>('')
  const [player1Character, setPlayer1Character] = useState<number>(0)
  const [player2Character, setPlayer2Character] = useState<number>(0)
  const [player3Character, setPlayer3Character] = useState<number>(13)
  const [player4Character, setPlayer4Character] = useState<number>(0)

  const charactersArray = [
    "Mario", "Donkey Kong", "Link", "Samus",
    "Yoshi", "Kirby", "Fox", "Pikachu",
    "Luigi", "Ness", "Captain Falcon", "Jigglypuff", 
    "Peach", "Daisy", "Bowser", "Ice Climbers", 
    "Sheik", "Zelda", "Dr. Mario", "Pichu", 
    "Falco", "Marth", "Lucina", "Young Link", 
    "Ganondorf", "Mewtwo", "Roy", "Chrom", 
    "Mr. Game & Watch", "Meta Knight", "Pit", 
    "Dark Pit", "Zero Suit Samus", "Wario", "Snake", 
    "Ike", "Pokemon Trainer", "Diddy Kong", "Lucas", 
    "Sonic", "King Dedede", "Olimar", "Lucario", 
    "R.O.B.", "Toon Link", "Wolf", "Villager", 
    "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", 
    "Greninja", "Palutena", "Pac-Man", "Robin", 
    "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", 
    "Ken", "Cloud", "Corrin", "Bayonetta", 
    "Inkling", "Ridley", "Simon", "Richter", 
    "King K. Rool", "Isabelle", "Incineroar", 
    "Piranha Plant", "Joker", "Hero", "Bango & Kazooie", 
    "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", 
    "Pyra/Mythra", "Kazuya", "Sora", "Mii Brawler", 
    "Mii Swordfighter", "Mii Gunner", "Random"
  ]

  useEffect(() => {
    let newMessage = '';
    switch (movement) {
      case 0:
        newMessage = 'the player will move 0 spaces'
        break
      case 1:
        newMessage = 'the player will move 1 space'
        break
      case 2:
        newMessage = 'the player will move 2 spaces'
        break
      case 3:
        newMessage = 'the player will move 3 spaces'
        break
      case 4:
        newMessage = 'the player will move 4 spaces'
        break
      case 5:
        newMessage = 'the player will move 5 spaces'
        break
      case 6:
        newMessage = 'Red Turtle Shell. the player will move -6 spaces'
        break
      case 7:
        newMessage = 'the player will move -7 spaces'
        break
      case 8:
        newMessage = 'the player will move -8 spaces'
        break
      case 9:
        newMessage = 'the player will move -9 spaces'
        break
      case 10:
        newMessage = 'the player will move 10 spaces'
        break
      case 11:
        newMessage = 'the player will move -11 spaces'
        break
      case 12:
        newMessage = 'the player will move -12 spaces'
        break
      case 13:
        newMessage = 'the player will move -13 spaces'
        break
      case 14:
        newMessage = 'the player will move -14 spaces'
        break
      case 15:
        newMessage = 'the player will move -15 spaces'
        break
      default:
        newMessage = ''
    }
    setMessage(newMessage)
  }, [movement])

  return (
    <div>
      <SpinResult 
        message={message}
      />
      <GameSpinner 
        setMovement={setMovement}
      />
      <Standings
        charactersArray={charactersArray}
        player1Character={player1Character}
        player2Character={player2Character}
        player3Character={player3Character}
        player4Character={player4Character}
      />
    </div>
  )
}

export default App;