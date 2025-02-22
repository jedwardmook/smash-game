import characterTilesArray from '../assets/characterTilesArray'
import { usePlayersContext } from '../context/usePlayersContext'
import GameSquare from './GameSquare'

interface Tile {
  id: number,
  character: string,
  backGroundImage: string,
}

const GameBoard = () => {
  const { players } = usePlayersContext()

  const gameBoardMap = characterTilesArray.map((tile: Tile) => {
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