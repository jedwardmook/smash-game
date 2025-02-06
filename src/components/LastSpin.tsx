import React from 'react'
import styles from '../styles/last-spin.module.css'

interface LastSpinProps {
  setShowSpinResult: React.Dispatch<React.SetStateAction<boolean>>,
  message: string,
  rule: string,
  icon: string,
}

const LastSpin = ({setShowSpinResult, message, rule, icon}: LastSpinProps) => {
  return (
    <div className={styles['last-spin-container']}>
      <div>
        <h2 className={styles['last-spin-header']}>Last Spin</h2>
      </div>
      <div className={styles['last-spin-content']}>
        {message.length > 0 ? (
          <>
            <img className={styles['last-spin-image']} src={icon}/>
            <h3 className={styles['last-spin-rule']}>{rule}</h3>
          </>
          )
          : 
          <>
            <h3 className={styles['last-spin-start']}>Click the spinner to start the game.</h3>
            <h3 className={styles['last-spin-arrow']}>➮</h3>
          </>
        }
      </div>
      <div className={styles['spinner-button-container']}>
        <button className={styles['spinner-button']} onClick={() => setShowSpinResult(true)}>Button</button>
      </div>
    </div>
  )
}

export default LastSpin