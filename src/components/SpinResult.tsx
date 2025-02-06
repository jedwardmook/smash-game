import React, { useState } from 'react'
import GameSpinner from './GameSpinner'
import HideSpinResult from './HideSpinResult'
import styles from '../styles/spin-result.module.css'

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface SpinResultProps {
  message: string,
  movement: number,
  rule: string,
  icon: string,
  updatePlayerCharacter: (id: number, amount: number) => void,
  setShowSpinResult: React.Dispatch<React.SetStateAction<boolean>>,
  players: PlayerType[],
  setOptionNumber: (optionNumber: number) => void
  turnEnded: boolean
  animation?: string
}

const SpinResult = ({
  message, 
  movement,
  rule,
  icon,
  updatePlayerCharacter, 
  setShowSpinResult, 
  players,
  setOptionNumber,
  turnEnded,
  animation,
  }: SpinResultProps) => {
    const [spinnerSpinning, setSpinnerSpinning] = useState(false);

  return (
    <dialog className={styles['spin-result-container']} open>
      <div className={styles['spin-result-exit-container']}>
        <button onClick={() => setShowSpinResult(false)}>View Game Board</button>
      </div>
      <div className={styles['spin-result-main-content']}>
        <div className={styles['spin-result-gameplay-content']}>
        {turnEnded ? (
          <HideSpinResult
            spinnerSpinning={spinnerSpinning}
          />
          ) : 
        message.length > 0 ? (
          <div className={styles['spin-result-turn-content']}>
            <img src={icon} className={`${styles['spin-result-turn-image']} ${styles[`${animation}`]}`}></img>
            <h1>{rule}</h1>
            <p>{message}</p>
            <div className={styles['spin-result-button-container']}>
              {players.map((player, index) => (
                <button className={`${styles['spin-result-player-button']} ${styles[`player-${index + 1}`]}`} onClick={() => updatePlayerCharacter(player.playerId, movement)} key={player.playerId}>{player.playerName.length > 0 ? player.playerName : `Player ${index +1}`}</button>
              ))}
            </div>
          </div>
        ) : (
          !spinnerSpinning ?
          <div>
            Spin the spinner to start the game
          </div>
          :
          <div>
            Spinner is spinning
          </div>
          )}
        </div>
        <GameSpinner
          setOptionNumber={setOptionNumber}
          setShowSpinResult={setShowSpinResult}
          setSpinnerSpinning={setSpinnerSpinning}
        />
      </div>
    </dialog>
  )
}

export default SpinResult