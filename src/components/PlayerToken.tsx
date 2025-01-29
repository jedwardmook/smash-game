import React from 'react'
import styles from '../styles/player-token.module.css'

interface Player {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface PlayerTokenProps {
  player: Player,
  index: number,
  playerCount: number,
}

const PlayerToken = ({player, index, playerCount}: PlayerTokenProps) => {
  return (
    <div className={`${styles['player-token']} ${styles[`players-${playerCount}`]} ${styles[`player-card-color-${index}`]}`}>
      <div className={`${styles['player-token-inner']} ${styles[`player-inner-color-${index}`]}`}>
        {player.playerName[0]}
      </div>
    </div>
  )
}

export default PlayerToken