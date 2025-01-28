import { useEffect, useState } from 'react'
import styles from '../styles/game-square.module.css'

interface Tile {
  id: number,
  character: string,
  backGroundImage: string,
}

interface Player {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface GameSquareProps {
  tile: Tile,
  players: Player[],
}

const GameSquare = ({
  tile,
  players
  }: GameSquareProps) => {
  const [playerCount, setPlayersCount] = useState(0)

  useEffect(() => {
    const count = players.filter(player => player.playerCharacter + 1 === tile.id).length;
    setPlayersCount(count);
  }, [players, tile.id])

  return (
    <div className={styles['game-square']}>
      <img src={tile.backGroundImage} alt={`${tile.character} tile`} className={`${styles['game-square-image']} ${styles[`players-${playerCount}`]}`} />
      {/* <h4 className={styles['game-square-header']}>{tile.character}</h4> */}
      <div className={`${styles['game-square-player-grid']} ${styles[`players-${playerCount}`]}`}>
        {players.map((player, index) => 
          player.playerCharacter + 1 === tile.id &&
          <div className={`${styles['player-token']} ${styles[`players-${playerCount}`]} ${styles[`player-card-color-${index}`]}`}>{player.playerName[0]}</div>
        )}
      </div>
    </div>
  )
}

export default GameSquare