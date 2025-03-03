import { useEffect, useState } from 'react'
import './App.css'
import SpinResult from './components/SpinResult'
import Standings from './components/Standings'
import CreateGame from './components/CreateGame'
import GameBoard from './components/GameBoard'
import Header from './components/Header'
import LastSpinContainer from './components/LastSpin'
import { PlayersProvider } from './context/PlayersProvider'

const App = () => {
  const [optionNumber, setOptionNumber] = useState<number>()
  const [movement, setMovement] = useState<number>(0)
  const [message, setMessage] = useState<string>('')
  const [rule, setRule] = useState<string>('')
  const [icon, setIcon] = useState<string>('')
  const [showSpinResult, setShowSpinResult] = useState<boolean>(false)
  const [showCreateGame, setShowCreateGame] = useState<boolean>(true)
  const [animation, setAnimation] = useState<string>('')
  const [component, setComponent] = useState<string>('')
  const [showPlayerController, setShowPlayerController] = useState<boolean>(false)
  const [turnEnded, setTurnEnded] = useState<boolean>(false)

  useEffect(() => {
    let newMessage
    let newMovement
    let newRule
    let newIcon
    let newAnimation;
    let component;
    switch (optionNumber) {
      case 0:
        component='SpinResultDefault'
        newRule = 'items'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'Turn items on - set to low.'
        newMovement = 3
        newAnimation = ''
        break
      case 1:
        component='SpinResultDefault'
        newRule = 'Pokeballs!'
        newIcon = '/public/pokeball.svg'
        newMessage = 'Turn pokeballs on set to medium.'
        newMovement = 4
        newAnimation = 'pokeball'
        break
      case 2:
        component='SpinResultDefault'
        newRule = 'Poison Mushrooms'
        newIcon = '/public/poison-mushroom.svg'
        newMessage = 'Turn on Poison Mushrooms.'
        newMovement = 2
        newAnimation = ''
        break
      case 3:
        component='SpinResultDefault'
        newRule = 'Big Blue'
        newIcon = '/public/salute.svg'
        newMessage = 'Play on the stage Big Blue.'
        newMovement = 3
        newAnimation = 'salute'
        break
      case 4:
        component='SpinResultDefault'
        newRule = 'Mushrooms'
        newIcon = '/public/mushroom.svg'
        newMessage = 'Turn on Mushrooms.'
        newMovement = 4
        newAnimation = ''
        break
      case 5:
        component='SpinResultBlueShell'
        newRule = 'Blue Turtle Shell'
        newIcon = '/public/blueshell.svg'
        newMessage = 'blue shell'
        newMovement = 0 
        newAnimation = 'turtle-shell'
        break
      case 6:
        component='SpinResultDefault'
        newRule = 'Green Turtle Shell'
        newIcon = '/public/greenshell.svg'
        newMessage = 'Spinner hit with a green turtle shell.'
        newMovement = -2
        newAnimation = 'turtle-shell'
        break
      case 7:
        component='SpinResultDefault'
        newRule = 'Kitchen Sink'
        newIcon = '/public/sink.svg'
        newMessage = 'Turn on all items, final smash, and pokeballs.'
        newMovement = 6
        newAnimation = 'dropdown'
        break
      case 8:
        component='SpinResultDefault'
        newRule = 'Final Smash'
        newIcon = '/public/smash.svg'
        newMessage = 'Turn on Final Smash.'
        newMovement = 3
        newAnimation = 'flash-grow'
        break
      case 9:
        component='SpinResultDefault'
        newRule = '100% Battle'
        newIcon = '/public/100.svg'
        newMessage = 'Each player plays with 100% damage.'
        newMovement = 5
        newAnimation = ''
        break
      case 10:
        component='SpinResultTeam'
        newRule = 'Team Battle'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'Players split into two teams based on standings.'
        newMovement = 4
        newAnimation = ''
        break
      case 11:
        component='SpinResultDefault'
        newRule = 'Banana Peel'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'The spinning player moves back a space. Spin again'
        newMovement = -1
        newAnimation = ''
        break
      case 12:
        component='SpinResultDefault'
        newRule = 'Items'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'Turn items on set to medium.'
        newMovement = 5
        newAnimation = ''
        break
      case 13:
        component='SpinResultDefault'
        newRule = 'Stand UP!'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'All players stand up during the match.'
        newMovement = 4
        newAnimation = ''
        break
      case 14:
        component='SpinResultDefault'
        newRule = 'Mute the TV'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'All players mute the TV during the match.'
        newMovement = 3
        newAnimation = ''
        break
      case 15:
        component='SpinResultDefault'
        newRule = 'ITEMS!'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'Turn items on - set to high.'
        newMovement = 6
        newAnimation = ''
        break
      case 16:
        component='SpinResultDefault'
        newRule = 'Shhhhh!'
        newIcon = '/public/pointing-finger-clipart.svg'
        newMessage = 'No making a sound during the match.'
        newMovement = 5
        newAnimation = ''
        break
      default:
        component='SpinResultDefault'
        newRule = 'Mario Battle'
        newIcon = '/public/mario_open.png'
        newMessage = 'All players play as Mario.'
        newMovement = Math.ceil(Math.random() * 10)
        newAnimation = 'rise-up'
    }
    setMessage(newMessage);
    setMovement(newMovement);
    setIcon(newIcon);
    setRule(newRule);
    setAnimation(newAnimation);
    setComponent(component);
    setTurnEnded(false);
  }, [optionNumber])

  return (
    <PlayersProvider>
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
              setShowCreateGame={setShowCreateGame}
            />
          }
          <Header />
          <GameBoard
          />
        </div>
      {showSpinResult&& 
        <SpinResult
          rule={rule}
          icon={icon}
          message={message}
          movement={movement}
          setShowSpinResult={setShowSpinResult}
          setOptionNumber={setOptionNumber}
          animation={animation}
          showPlayerController={showPlayerController}
          component={component}
          setTurnEnded={setTurnEnded}
          turnEnded={turnEnded}
        />
      }
        <div className='standing-last-spin-container'>
          <Standings />
          <LastSpinContainer 
            setShowSpinResult={setShowSpinResult}
            setShowPlayerController={setShowPlayerController}
          />
        </div>
      </div>
    </PlayersProvider>
  )
}

export default App;