import charactersArray from '../assets/charactersArray'
import styles from '../styles/player-controller.module.css'

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface PlayerControllerProps {
  players: PlayerType[],
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>
}

const PlayerController = ({players, setPlayers}: PlayerControllerProps) => {

  const handleDecreaseIncreaseCharacterClick = (id: number, amount: number) => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player =>
        player.playerId === id
        ? {...player, playerCharacter: Math.max(0, player.playerCharacter + amount)}
        : player
      )
    );
  }

  return (
    <div className={styles['player-controller-container']}>
      {players.map((player, index) => {
        return (
          <div key={index} className={styles['player-position-container']}>
            <div className={styles['player-row']}>
              <div className={`${styles['player-name-container']} ${styles[`player-${index + 1}`]}`}>
                <p className={styles['player-name']}>{player.playerName}</p>
              </div>
              <div className={`${styles['player-position']} ${styles[`player-${index + 1}-light`]}`}>
              {charactersArray.map((_character: object, index: number) => {
                return (
                  index === player.playerCharacter ?
                    <img src={charactersArray[player.playerCharacter].image} style={{width: '30px'}}></img>
                    : <p style={{padding: '1px'}}>•</p>
                )
              })}
              </div>
              <div className={`${styles['buttons-container']} ${styles[`player-${index + 1}`]}`}>
                <button className={`${styles['controller-button']} ${styles[`player-${index + 1}-light`]}`} onClick={() => handleDecreaseIncreaseCharacterClick(player.playerId, 1)}>+1</button>
                <button className={`${styles['controller-button']} ${styles[`player-${index + 1}-light`]}`} onClick={() => handleDecreaseIncreaseCharacterClick(player.playerId, -1)}>-1</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerController