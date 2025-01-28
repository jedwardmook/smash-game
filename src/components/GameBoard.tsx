import characterTilesArray from '../assets/characterTilesArray'
import GameSquare from './GameSquare'

interface Player {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface Tile {
  id: number,
  character: string,
  backGroundImage: string,
}

interface GameBoardProps {
  players: Player[],
}

const GameBoard = ({players}: GameBoardProps) => {

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