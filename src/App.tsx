import { useEffect, useState } from 'react'
import './App.css'
import SpinResult from './components/SpinResult'
import Standings from './components/Standings'
import CreateGame from './components/CreateGame'
import GameBoard from './components/GameBoard'
import Header from './components/Header'
import LastSpinContainer from './components/LastSpin'

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

const App = () => {
  const [optionNumber, setOptionNumber] = useState<number>()
  const [movement, setMovement] = useState<number>(0)
  const [message, setMessage] = useState<string>('')
  const [rule, setRule] = useState<string>('')
  const [icon, setIcon] = useState<string>('')
  const [showSpinResult, setShowSpinResult] = useState<boolean>(false)
  const [players, setPlayers] = useState<PlayerType[]>([]) 
  const [showCreateGame, setShowCreateGame] = useState<boolean>(true)
  const [turnEnded, setTurnEnded] = useState<boolean>(false)

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
        newMovement = 1
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
        newMovement = 1
        break
      case 3:
        newRule = 'Big Blue'
        newIcon = '/public/salute.svg'
        newMessage = 'Play on the stage Big Blue. The winner moves forward 3 spaces.'
        newMovement = 1
        break
      case 4:
        newRule = 'Mushroom Battle'
        newIcon = '/public/mushroom.svg'
        newMessage = 'Turn on mushrooms. The winner moves forward 4 spaces.'
        newMovement = 1
        break
      case 5:
        newRule = 'Blue Turtle Shell'
        newIcon = '/public/blueshell.svg'
        newMessage = 'The player in the lead moves back 10 spaces.'
        newMovement = 1
        break
      case 6:
        newRule = 'Green Turtle Shell'
        newIcon = '/public/greenshell.svg'
        newMessage = 'Spinner moves back 4 spaces.'
        newMovement = 1
        break
      case 7:
        newRule = 'Kitchen Sink'
        newIcon = '/public/sink.svg'
        newMessage = 'Turn on all items and final smash. Winner moves forward 6 spaces.'
        newMovement = 1
        break
      case 8:
        newRule = 'Final Smash'
        newIcon = '/public/smash.svg'
        newMessage = 'Turn on final smash. The winner moves forward 5 spaces.'
        newMovement = 1
        break
      case 9:
        newRule = '100% Battle'
        newIcon = '/public/100.svg'
        newMessage = 'The winning player moves forward 5 spaces.'
        newMovement = 1
        break
      case 10:
        newRule = '2v2.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'The last and first place player play against the second and third place player. The winning team moves forward 7 spaces.'
        newMovement = 1
        break
      case 11:
        newRule = 'Minus 5'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'The spinning player moves back 5 spaces. Spin again'
        newMovement = 1
        break
      case 12:
        newRule = 'Big FINGER.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'the player will move 12 spaces'
        newMovement = 1
        break
      case 13:
        newRule = 'Big FINGER.'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'the player will move 13 spaces'
        newMovement = 1
        break
      case 14:
        newRule = 'Mute the TV'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'The winning player moves forward 3 spaces.'
        newMovement = 1
        break
      case 15:
        newRule = 'Stand up!'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'All players stand up during the match. The winning player moves forward 6 spaces.'
        newMovement = 1
        break
      default:
        newRule = ''
        newIcon = ''
        newMessage = ''
        newMovement = 0
    }
    setMessage(newMessage);
    setMovement(newMovement);
    setIcon(newIcon);
    setRule(newRule);
    setTurnEnded(false);
  }, [optionNumber])

  const updatePlayerCharacter = (id: number, amount: number): void => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player =>
        player.playerId === id
        ? {...player, playerCharacter: Math.max(0, player.playerCharacter + amount)}
        : player
      )
    );
    setTurnEnded(true);
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      width: '100vw', 
      backgroundImage: "url('https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/1/18/SmashMap_Locations.jpg?width=2240')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      margin: '0', 
      padding: '0', 
      overflow: 'hidden' 
      }}>
      <div>
      {showCreateGame&& 
      <CreateGame 
        setPlayers={setPlayers}
        setShowCreateGame={setShowCreateGame}
      />
      }
      <Header />
      <GameBoard
        players={players}
      />
      </div>
      {showSpinResult&& 
      <SpinResult
        rule={rule}
        icon={icon}
        message={message}
        movement={movement}
        updatePlayerCharacter={updatePlayerCharacter}
        setShowSpinResult={setShowSpinResult}
        players={players}
        setOptionNumber={setOptionNumber}
        turnEnded={turnEnded}
      />
      }
      <div className='standing-last-spin-container'>
      <Standings
        players={players}
      />
      <LastSpinContainer 
        setShowSpinResult={setShowSpinResult}
        message={message}
        rule={rule}
        icon={icon}
      />
      </div>
    </div>
  )
}

export default App;