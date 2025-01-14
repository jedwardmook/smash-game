import { useEffect, useState } from 'react'
import './App.css'
import GameSpinner from './components/GameSpinner'
import SpinResult from './SpinResult'
import Standings from './components/Standings'
// import GameBoard from './components/GameBoard'

const App = () => {
  const [optionNumber, setOptionNumber] = useState<number>()
  const [movement, setMovement] = useState<number>(0)
  const [message, setMessage] = useState<string>('')
  const [rule, setRule] = useState<string>('')
  const [icon, setIcon] = useState<string>('')
  const [player1Character, setPlayer1Character] = useState<number>(0)
  const [player2Character, setPlayer2Character] = useState<number>(0)
  const [player3Character, setPlayer3Character] = useState<number>(0)
  const [player4Character, setPlayer4Character] = useState<number>(0)
  const [showSpinResult, setShowSpinResult] = useState<boolean>(false)

  useEffect(() => {
    let newMessage = '';
    let newMovement = 0;
    let newRule = '';
    let newIcon = ''
    switch (optionNumber) {
      case 0:
        newRule = 'Big FINGER.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'the player will move 0 spaces'
        newMovement = 0
        break
      case 1:
        newRule = 'Pokeballs!'
        newIcon = '/public/pokeball.svg'
        newMessage = 'Turn on pokeballs. The winner moves forward 4 spaces.'
        newMovement = 1
        break
      case 2:
        newRule = 'Poison Mushrooms Battle'
        newIcon = '/public/poison-mushroom.svg'
        newMessage = 'Turn on poison mushrooms. The winner moves forward 2 spaces.'
        newMovement = 2
        break
      case 3:
        newRule = 'Big Blue'
        newIcon = '/public/salute.svg'
        newMessage = 'Play on the stage Big Blue. The winner moves forward 3 spaces.'
        newMovement = 3
        break
      case 4:
        newRule = 'Mushroom Battle'
        newIcon = '/public/mushroom.svg'
        newMessage = 'Turn on mushrooms. The winner moves forward 4 spaces.'
        newMovement = 4
        break
      case 5:
        newRule = 'Blue Turtle Shell'
        newIcon = '/public/blueshell.svg'
        newMessage = 'The player in the lead moves back 10 spaces.'
        newMovement = -10
        break
      case 6:
        newRule = 'Green Turtle Shell'
        newIcon = '/public/greenshell.svg'
        newMessage = 'Spinner moves back 4 spaces.'
        newMovement = -4
        break
      case 7:
        newRule = 'Kitchen Sink'
        newIcon = '/public/sink.svg'
        newMessage = 'Turn on all items and final smash. Winner moves forward 6 spaces.'
        newMovement = 7
        break
      case 8:
        newRule = 'Final Smash'
        newIcon = '/public/smash.svg'
        newMessage = 'Turn on final smash. The winner moves forward 5 spaces.'
        newMovement = 5
        break
      case 9:
        newRule = '100% Battle'
        newIcon = '/public/100.svg'
        newMessage = 'the player will move 9 spaces'
        newMovement = 9
        break
      case 10:
        newRule = 'Big FINGER.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'the player will move 10 spaces'
        newMovement = 10
        break
      case 11:
        newRule = 'Big FINGER.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'the player will move 11 spaces'
        newMovement = 11
        break
      case 12:
        newRule = 'Big FINGER.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'the player will move 12 spaces'
        newMovement = 12
        break
      case 13:
        newRule = 'Big FINGER.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'the player will move 13 spaces'
        newMovement = 13
        break
      case 14:
        newRule = 'Big FINGER.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'the player will move 14 spaces'
        newMovement = 14
        break
      case 15:
        newRule = 'Big FINGER.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'the player will move 15 spaces'
        newMovement = 15
        break
      default:
        newRule = ''
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = ''
        newMovement = 0
    }
    setMessage(newMessage);
    setMovement(newMovement);
    setIcon(newIcon);
    setRule(newRule);
  }, [optionNumber])

  const updatePlayerCharacter = (playerCharacterFunction: React.Dispatch<React.SetStateAction<number>>, amount: number): void => {
    playerCharacterFunction((previousCharacter: number) => {
      const newCharacterIndex = previousCharacter + amount;
      return Math.max(0, newCharacterIndex);
    });
    setShowSpinResult(false);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '80vh' }}>
      {showSpinResult&& 
      <SpinResult
        rule={rule}
        icon={icon}
        message={message}
        movement={movement}
        updatePlayerCharacter={updatePlayerCharacter}
        setShowSpinResult={setShowSpinResult}
        setPlayer1Character={setPlayer1Character}
        setPlayer2Character={setPlayer2Character}
        setPlayer3Character={setPlayer3Character}
        setPlayer4Character={setPlayer4Character}
      />
      }
      <Standings
        player1Character={player1Character}
        player2Character={player2Character}
        player3Character={player3Character}
        player4Character={player4Character}
      />
      <GameSpinner 
        setOptionNumber={setOptionNumber}
        setShowSpinResult={setShowSpinResult}
      />
    </div>
  )
}

export default App;