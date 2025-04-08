import { usePlayersContext } from '../context/usePlayersContext'
import { useGameContext } from '../context/useGameContext'
import GameSquare from './GameSquare'
import { GameBoardTileType } from '../context/GameContext'

const GameBoard = () => {
  const { players } = usePlayersContext()
  const { game } = useGameContext()

  const gameBoardMap = game.gameBoard.map((tile: GameBoardTileType) => {
    return (
      <GameSquare
        key={tile.id}
        tile={tile} 
        players={players}
      />
    )
  })

  return (
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>{gameBoardMap}</div>
  )
}

export default GameBoard