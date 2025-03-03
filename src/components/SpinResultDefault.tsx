import React from 'react';
import styles from '../styles/spin-result-default.module.css'

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface SpinResultDefaultProps {
  rule: string,
  message: string,
  icon: string,
  animation: string,
  players: PlayerType[],
  movement: number,
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>,
  setTurnEnded: React.Dispatch<React.SetStateAction<boolean>>,
  setPlayerSpinning: React.Dispatch<React.SetStateAction<string>>,
}

const SpinResultDefault = ({
  rule,
  message,
  icon,
  animation,
  players,
  movement,
  setPlayers,
  setTurnEnded,
  setPlayerSpinning,
  }: SpinResultDefaultProps) => {

    const updatePlayerCharacter = (id: number, amount: number) => {
      setPlayers(prevPlayers =>
        prevPlayers.map(player =>
          player.playerId === id
          ? {...player, playerCharacter: Math.max(0, player.playerCharacter + amount)}
          : player
        )
      );
      setTurnEnded(true);
      const filteredPlayer = players.find(player => player.playerId === id)
      if (filteredPlayer) {
        setPlayerSpinning(filteredPlayer.playerName);
      }
    }

  return (
    <div className={styles['spin-result-default-turn-content']}>
      <h1 className={`${styles['spin-result-default-rule']}`}>{rule}</h1>
      <p className={styles['spin-result-default-message']}>{message}</p>
      <div>
        <img className={`${styles['spin-result-default-turn-image']} ${styles[`${animation}`]}`} src={icon}></img>
      </div>
      <p className={styles['spin-result-default-playing-for']}>{movement > 0 ? `Playing for ${movement}` : `Spinner moves ${movement * -1} back`}</p>
      <div className={styles['spin-result-default-button-container']}>
        {players.map((player, index) => (
          <button className={`${styles['spin-result-default-player-button']} ${styles[`player-${index + 1}`]}`} onClick={() => updatePlayerCharacter(player.playerId, movement)} key={player.playerId}>{player.playerName}</button>
        ))}
      </div>
      <p className={styles['spin-result-default-click']}>{movement > 0 ? 'CLICK WINNER' : 'CLICK PLAYER SPINNING'}</p>
    </div>
  )
}

export default SpinResultDefault