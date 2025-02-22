import charactersArray from '../assets/charactersArray'
import { usePlayersContext } from '../context/usePlayersContext'
import styles from '../styles/standings.module.css'

const Standings = () => {
  const { players } = usePlayersContext()

  return (
    <div className={styles['standings-container']}>
      <h2 className={styles['standings-header']}>Players</h2>
      <div className={styles['card-container']}>
        {players && players.map((player, index) => {
          return (
            <div key={index} className={`${styles['player-card-container']} ${styles[`player-card-color-${index}`]}`}>
              <div className={`${styles['player-card-header']} ${styles[`player-card-color-light-${index}`]}`}>
                <p className={styles['player-name']}>{player.playerName}</p>
              </div>
              <img src={charactersArray[player.playerCharacter].image} className={styles['character-image']}></img>
              <p className={styles['character-name']}>{charactersArray[player.playerCharacter].name}</p>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default Standings