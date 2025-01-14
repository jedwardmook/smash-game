import charactersArray from '../assets/charactersArray'
import styles from '../styles/standings.module.css'

interface StandingsProps {
  player1Character: number,
  player2Character: number,
  player3Character: number,
  player4Character: number,
}

const Standings = ({
  player1Character,
  player2Character,
  player3Character,
  player4Character
}: StandingsProps) => {

  const playersArray = [
    {
      playerName: "John",
      playerCharacter: charactersArray[player1Character].name,
      playerCharacterImage: charactersArray[player1Character].image,
    },
    {
      playerName: "Danny",
      playerCharacter: charactersArray[player2Character].name,
      playerCharacterImage: charactersArray[player2Character].image,
    },
    {
      playerName: "Ben",
      playerCharacter: charactersArray[player3Character].name,
      playerCharacterImage: charactersArray[player3Character].image,
    },
    {
      playerName: "Dan",
      playerCharacter: charactersArray[player4Character].name,
      playerCharacterImage: charactersArray[player4Character].image,
    },
  ]

  return (
    <div className={styles['card-container']}>
      {playersArray.map((player, index) => {
        return (
          <div key={index} className={`${styles['player-card-container']} ${styles[`player-card-color-${index}`]}`}>
            <div className={`${styles['player-card-header']} ${styles[`player-card-color-light-${index}`]}`}>
              <p className={styles['player-name']}>{player.playerName}</p>
            </div>
            <img src={player.playerCharacterImage} className={styles['character-image']}></img>
            <p className={styles['character-name']}>{player.playerCharacter}</p>
          </div>
        )
      }
    )}
    </div>
  )
}

export default Standings