import { useGameContext } from '../context/useGameContext'
import WinnerScreen from './WinnerScreen'

const WinnerScreenContainer = () => {
  const { gameOver } = useGameContext()

  return (
    gameOver ? <WinnerScreen /> : <div></div> 
  )
}

export default WinnerScreenContainer