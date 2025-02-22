import styles from '../styles/spin-result-default.module.css'

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface SpinResultBlueShellProps {
  rule: string,
  message: string,
  icon: string,
  animation: string,
  players: PlayerType[],
  movement: number | number[],
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>
  setTurnEnded: React.Dispatch<React.SetStateAction<boolean>>,
}

const SpinResultBlueShell = ({
  rule,
  message,
  icon,
  animation,
  players,
  setPlayers,
  setTurnEnded,
  }: SpinResultBlueShellProps) => {

    const handleBlueShellUpdatePlayers = () => {
      const newPlayers = JSON.parse(JSON.stringify(players));
      const highestValue = Math.max(...newPlayers.map((player: PlayerType) => player.playerCharacter))

      newPlayers.forEach((player: PlayerType) => {
        if (player.playerCharacter === highestValue && highestValue !== 0) {
          player.playerCharacter = Math.max(0, player.playerCharacter - 5);
        } else {
          player.playerCharacter += 1
        }
      })
      setPlayers(newPlayers);
      setTurnEnded(true)
    }

  return (
    <div className={styles['spin-result-default-turn-content']}>
      <h1 className={styles['spin-result-default-rule']}>{rule}</h1>
      <img className={`${styles['spin-result-default-turn-image']} ${styles[`${animation}`]}`} src={icon}></img>
      <p className={styles['spin-result-default-message']}>{message}</p>
      <p className={styles['spin-result-default-playing-for']}>
        <>
          <li>Lead player moves back 5</li>
          <li>All other players move forward 1</li>
        </>
      </p>
      <div className={styles['spin-result-default-button-container']}>
          <button className={`${styles['spin-result-default-player-button']} ${styles['blue-shell']}`} onClick={handleBlueShellUpdatePlayers}>Blue Shell</button>
      </div>
      <p className={styles['spin-result-default-click']}>CLICK TO CONTINUE. SPIN AGAIN.</p>
    </div>
  )
}

export default SpinResultBlueShell