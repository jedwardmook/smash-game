import React, { useState } from 'react'
import GameSpinner from './GameSpinner'
import HideSpinResult from './HideSpinResult'
import PlayerController from './PlayerController'
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
  animation: string
  showPlayerController: boolean
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>
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
  showPlayerController,
  setPlayers,
  }: SpinResultProps) => {
    const [spinnerSpinning, setSpinnerSpinning] = useState(false);

  return (
    <dialog className={styles['spin-result-container']} open>
      <div className={styles['spin-result-exit-container']}>
        <button onClick={() => setShowSpinResult(false)}>View Game Board</button>
      </div>
      {showPlayerController ? 
      <PlayerController 
        players={players}
        setPlayers={setPlayers}
      />
      :
      <div className={styles['spin-result-main-content']}>
        <div className={styles['spin-result-gameplay-content']}>
        {turnEnded ? (
          <HideSpinResult
            spinnerSpinning={spinnerSpinning}
            rule={rule}
            icon={icon}
            animation={animation}
          />
        ) : 
        message.length > 0 ? (
          <div className={styles['spin-result-turn-content']}>
            <h1 className={styles['spin-result-rule']}>{rule}</h1>
            <img src={icon} className={`${styles['spin-result-turn-image']} ${styles[`${animation}`]}`}></img>
            <p className={styles['spin-result-message']}>{message}</p>
            <div className={styles['spin-result-button-container']}>
              {players.map((player, index) => (
                <button className={`${styles['spin-result-player-button']} ${styles[`player-${index + 1}`]}`} onClick={() => updatePlayerCharacter(player.playerId, movement)} key={player.playerId}>{player.playerName.length > 0 ? player.playerName : `Player ${index +1}`}</button>
              ))}
            </div>
          </div>
        ) : (
          !spinnerSpinning ?
          <div>
            Mario Battle
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
      }
    </dialog>
  )
}

export default SpinResult