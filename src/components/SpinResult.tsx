import React, { useState } from 'react'
import GameSpinner from './GameSpinner'
import HideSpinResult from './HideSpinResult'
import PlayerController from './PlayerController'
import styles from '../styles/spin-result.module.css'
import SpinResultDefault from './SpinResultDefault'
import SpinResultBlueShell from './SpinResultBlueShell'
import SpinResultTeam from './SpinResultTeam'
import { usePlayersContext } from '../context/usePlayersContext'

interface SpinResultProps {
  message: string,
  movement: number,
  rule: string,
  icon: string,
  component: string,
  setShowSpinResult: React.Dispatch<React.SetStateAction<boolean>>,
  setOptionNumber: (optionNumber: number) => void
  animation: string
  showPlayerController: boolean
  setTurnEnded: React.Dispatch<React.SetStateAction<boolean>>
  turnEnded: boolean
}

const SpinResult = ({
  message, 
  movement,
  rule,
  icon,
  setShowSpinResult, 
  setOptionNumber,
  animation,
  showPlayerController,
  component,
  setTurnEnded,
  turnEnded,
  }: SpinResultProps) => {
    const { players, setPlayers } = usePlayersContext()
    const [spinnerSpinning, setSpinnerSpinning] = useState(false);

  return (
    <dialog className={styles['spin-result-container']} open>
      <div className={styles['spin-result-exit-container']}>
        <button className={styles['spin-result-game-board-button']} onClick={() => setShowSpinResult(false)}>View Game Board</button>
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
          component === 'SpinResultBlueShell' ? (
            <SpinResultBlueShell
              rule={rule}
              message={message}
              icon={icon}
              animation={animation}
              players={players}
              movement={movement}
              setPlayers={setPlayers}
              setTurnEnded={setTurnEnded}
            />
          ) : 
          component === 'SpinResultTeam' ? (
            <SpinResultTeam 
              rule={rule}
              message={message}
              icon={icon}
              animation={animation}
              players={players}
              movement={movement}
              setPlayers={setPlayers}
              setTurnEnded={setTurnEnded}
            />
            ) : 
          component === 'SpinResultDefault' && (
            <SpinResultDefault
              rule={rule}
              message={message}
              icon={icon}
              animation={animation}
              players={players}
              movement={movement}
              setPlayers={setPlayers}
              setTurnEnded={setTurnEnded}
            />
            )
          ) : (
          !spinnerSpinning ?
            <SpinResultDefault
              rule={rule}
              message={message}
              icon={icon}
              animation={animation}
              players={players}
              movement={movement}
              setPlayers={setPlayers}
              setTurnEnded={setTurnEnded}
            />
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
          turnEnded={turnEnded}
        />
      </div>
      }
    </dialog>
  )
}

export default SpinResult