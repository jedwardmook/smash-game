import React from 'react'
import styles from '../styles/last-spin.module.css'
import PlayerControllerButton from './PlayerControllerButton';

interface LastSpinProps {
  setShowSpinResult: React.Dispatch<React.SetStateAction<boolean>>,
  setShowPlayerController: React.Dispatch<React.SetStateAction<boolean>>,
}

const LastSpin = ({setShowSpinResult, setShowPlayerController}: LastSpinProps) => {

  const handleShowSpinnerClick = () => {
    setShowSpinResult(true);
    setShowPlayerController(false);
  }

  const handleShowPlayerControllerClick = () => {
    setShowSpinResult(true);
    setShowPlayerController(true);
  }
  
  return (
    <div className={styles['last-spin-container']}>
      <div>
        <h2 className={styles['last-spin-header']}>Controls</h2>
      </div>
      <div className={styles['last-spin-content']}>
        <div className={styles['last-spin-message']}>
          <h4 className={styles['player-controller-header']}>Player Controller</h4>
          <PlayerControllerButton 
            handleShowPlayerControllerClick={handleShowPlayerControllerClick}
          />
        </div>
        <div className={styles['spinner-button-container']}>
          <button className={styles['spinner-button']} onClick={handleShowSpinnerClick}>Button</button>
        </div>
      </div>
    </div>
  )
}

export default LastSpin