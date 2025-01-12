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
  const [player1Character, setPlayer1Character] = useState<number>(0)
  const [player2Character, setPlayer2Character] = useState<number>(0)
  const [player3Character, setPlayer3Character] = useState<number>(0)
  const [player4Character, setPlayer4Character] = useState<number>(0)
  const [showSpinResult, setShowSpinResult] = useState<boolean>(false)

  useEffect(() => {
    let newMessage = '';
    let newMovement = 0;
    switch (optionNumber) {
      case 0:
        newMessage = 'the player will move 0 spaces'
        newMovement = 0
        break
      case 1:
        newMessage = 'the player will move 1 space'
        newMovement = 1
        break
      case 2:
        newMessage = 'the player will move 2 spaces'
        newMovement = 2
        break
      case 3:
        newMessage = 'the player will move 3 spaces'
        newMovement = 3
        break
      case 4:
        newMessage = 'the player will move 4 spaces'
        newMovement = 4
        break
      case 5:
        newMessage = 'the player will move 5 spaces'
        newMovement = 5
        break
      case 6:
        newMessage = 'Red Turtle Shell. the player will move 6 spaces'
        newMovement = 6
        break
      case 7:
        newMessage = 'the player will move 7 spaces'
        newMovement = 7
        break
      case 8:
        newMessage = 'the player will move 8 spaces'
        newMovement = 8
        break
      case 9:
        newMessage = 'the player will move 9 spaces'
        newMovement = 9
        break
      case 10:
        newMessage = 'the player will move 10 spaces'
        newMovement = 10
        break
      case 11:
        newMessage = 'the player will move 11 spaces'
        newMovement = 11
        break
      case 12:
        newMessage = 'the player will move 12 spaces'
        newMovement = 12
        break
      case 13:
        newMessage = 'the player will move 13 spaces'
        newMovement = 13
        break
      case 14:
        newMessage = 'the player will move 14 spaces'
        newMovement = 14
        break
      case 15:
        newMessage = 'the player will move 15 spaces'
        newMovement = 15
        break
      default:
        newMessage = ''
        newMovement = 0
    }
    setMessage(newMessage)
    setMovement(newMovement)
  }, [optionNumber])

  const updatePlayerCharacter = (
    playerCharacterFunction: React.Dispatch<React.SetStateAction<number>>, amount: number): void => {
    playerCharacterFunction((previousCharacter: number) => previousCharacter = previousCharacter + amount)
    setShowSpinResult(false)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '80vh' }}>
      {showSpinResult&& 
      <SpinResult 
        message={message}
        movement={movement}
        updatePlayerCharacter={updatePlayerCharacter}
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