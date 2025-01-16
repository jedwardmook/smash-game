import React from 'react'
import styles from '../styles/game-square.module.css'


interface Tile {
  id: number,
  character: string,
  player1: boolean,
  player2: boolean,
  player3: boolean,
  player4: boolean
}

interface GameSquareProps {
  tile: Tile,
}

const GameSquare = ({
  tile
  }: GameSquareProps) => {
  const playerCount = [tile.player1, tile.player2, tile.player3, tile.player4].filter(Boolean).length;

  return (
    <div className={styles['game-square']}>
      <h4 className={styles['game-square-header']}>{tile.character}</h4>
      <div className={`${styles['game-square-player-grid']} ${styles[`players-${playerCount}`]}`}>
        {tile.player1 && <div className={`${styles['player-token']} ${styles[`players-${playerCount}`]}`}>P1</div>}
        {tile.player2 && <div className={`${styles['player-token']} ${styles[`players-${playerCount}`]}`}>P2</div>}
        {tile.player3 && <div className={`${styles['player-token']} ${styles[`players-${playerCount}`]}`}>P3</div>}
        {tile.player4 && <div className={`${styles['player-token']} ${styles[`players-${playerCount}`]}`}>P4</div>}
      </div>
    </div>
  )
}

export default GameSquare