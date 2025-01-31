import charactersArray from '../assets/charactersArray'
import styles from '../styles/standings.module.css'

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface StandingsProps {
  players: PlayerType[],
}

const Standings = ({
  players
}: StandingsProps) => {

  return (
    <div className={styles['standings-container']}>
      <h2 className={styles['standings-header']}>Players</h2>
      <div className={styles['card-container']}>
        {players && players.map((player, index) => {
          return (
            <div key={index} className={`${styles['player-card-container']} ${styles[`player-card-color-${index}`]}`}>
              <div className={`${styles['player-card-header']} ${styles[`player-card-color-light-${index}`]}`}>
                <p className={styles['player-name']}>{player.playerName.length > 0? player.playerName : `Player ${index + 1}`}</p>
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