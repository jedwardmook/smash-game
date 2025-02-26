import styles from '../styles/hide-spin-result.module.css';

interface HideSpinResultProps {
  spinnerSpinning: boolean,
  rule: string,
  icon: string,
  animation: string,
  playerSpinning: string,
}

const HideSpinResult = ({
  spinnerSpinning,
  rule,
  icon, 
  animation,
  playerSpinning
}: HideSpinResultProps) => {
  return (
    <>
      {spinnerSpinning? (
        <div>
          <h1>Spinner Spinning!</h1>
          <h1>Rule en route</h1>
          <h1>What will it be!</h1>
        </div>
        )
        :
        (
        <div className={styles['last-turn-container']}>
          <h1>Last Spin: {rule}</h1>
          <div className={styles['icon-container']}>
            <img src={icon} className={styles['last-turn-icon']}/>
          </div>
          <h1>{playerSpinning}'s spin</h1>
        </div>
        )
      }
    </>
  )
}

export default HideSpinResult