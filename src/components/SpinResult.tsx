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
          <div className={styles['']}>
            <img src={icon} style={{width: '150px', alignSelf: 'center', transform: 'rotate(180deg)'}}></img>
            <h2>{rule}</h2>
            {message}
            <div>
              {players.map((player, index) => (
                <button onClick={() => updatePlayerCharacter(player.playerId, movement)} key={player.playerId}>{player.playerName.length > 0 ? player.playerName : `Player ${index +1}`}</button>
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