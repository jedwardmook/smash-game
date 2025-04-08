import React from 'react'
import styles from '../styles/welcome.module.css';

interface WelcomeProps {
  setShowWelcome: React.Dispatch<React.SetStateAction<boolean>>
}

const Welcome = ({ setShowWelcome }: WelcomeProps) => {
  return (
    <div className={styles['welcome-container']}>
      <button className={`${styles['button']}`}>
        <div className={`${styles['create-game-button']}`}>
          <p className={styles['left-button']}>Create Game</p>
        </div>
      </button>
      <button className={`${styles['button']}`}>
        <div className={`${styles['how-to-button']}`}>
          <p className={styles['right-button']}>How to Play</p>
        </div>
      </button>
      <button className={`${styles['button']}`}>
        <div className={`${styles['credits-button']}`}>
          <p className={styles['left-button']}>Credits</p>
        </div>
      </button>
      <button className={`${styles['button']}`}>
        <div className={`${styles['coming-soon-button']}`}>
          <p className={styles['right-button']}>Coming Soon</p>
        </div>
      </button>
    </div>
  )
}

export default Welcome