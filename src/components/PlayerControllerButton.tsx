import charactersArray from '../assets/charactersArray'
import { usePlayersContext } from '../context/usePlayersContext'
import styles from '../styles/player-controller-button.module.css'

interface PlayerControllerProps {
  handleShowPlayerControllerClick : () => void
}

const PlayerControllerButton = ({handleShowPlayerControllerClick}: PlayerControllerProps) => {
  const { players } = usePlayersContext();

  const playersVisual = players.map((player, index) => {
    return (
      <div className={`${styles['player-visual']} ${styles[`player-${index + 1}`]}`}> 
        <div className={`${styles['inner-track']} ${styles[`player-${index + 1}-light`]}`}>
          <img 
            src={charactersArray[player.playerCharacter].image}
            style={{marginLeft: player.playerCharacter}}
            />
        </div>
      </div>
    )
  })

  return (
    <button
      onClick={handleShowPlayerControllerClick}
      className={styles['player-controller-button']}
    >
      {playersVisual}
    </button>
  )
}

export default PlayerControllerButton