import React from 'react'
import styles from '../styles/last-spin.module.css'

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
          <button onClick={handleShowPlayerControllerClick}>Player Controller</button>
        </div>
        <div className={styles['spinner-button-container']}>
          <button className={styles['spinner-button']} onClick={handleShowSpinnerClick}>Button</button>
        </div>
      </div>
    </div>
  )
}

export default LastSpin