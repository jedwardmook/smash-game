import { useState, useEffect } from 'react'
import styles from '../styles/spin-result-team.module.css'

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface SpinResultTeamProps {
  rule: string,
  message: string,
  icon: string,
  animation: string,
  players: PlayerType[],
  movement: number,
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>
  setTurnEnded: React.Dispatch<React.SetStateAction<boolean>>,
}

const SpinResultTeam = ({
  rule,
  message,
  icon,
  animation,
  players,
  movement,
  setPlayers,
  setTurnEnded,
  }: SpinResultTeamProps) => {
    const [firstAndLast, setFirstAndLast] = useState<number[]>([])
    const [secondAndThird, setSecondAndThird] = useState<number[]>([])
    const [firstPlaceColor, setFirstPlaceColor] = useState<string>('')
    const [secondPlaceColor, setSecondPlaceColor] = useState<string>('')
    const [thirdPlaceColor, setThirdPlaceColor] = useState<string>('')
    const [fourthPlaceColor, setFourthPlaceColor] = useState<string>('')

    useEffect(() => {
      const sortedPlayers = [...players].sort((a, b) => b.playerCharacter - a.playerCharacter)
      if (sortedPlayers.length > 3) {
        setFirstAndLast([sortedPlayers[0].playerId, sortedPlayers[sortedPlayers.length - 1].playerId])
        setSecondAndThird([sortedPlayers[1].playerId, sortedPlayers[2].playerId])
      } if (sortedPlayers?.length === 3) {
        setFirstAndLast([sortedPlayers[0].playerId, sortedPlayers[sortedPlayers.length - 1].playerId])
        setSecondAndThird([sortedPlayers[1].playerId])
      } if (sortedPlayers.length === 2){
        setFirstAndLast([sortedPlayers[0].playerId])
        setSecondAndThird([sortedPlayers[1].playerId])
      }
      setFirstPlaceColor(sortedPlayers[0].playerId.toString())
      setSecondPlaceColor(sortedPlayers[1].playerId.toString())
      setThirdPlaceColor(sortedPlayers[2]?.playerId.toString() || '')
      setFourthPlaceColor(sortedPlayers[3]?.playerId.toString() || '')
    }, [players])

    const handleTeamUpdatePlayers = (players: PlayerType[], ids: number[], amount: number) => {
      setPlayers(prevPlayers =>
        prevPlayers.map(player =>
          players.length > 3 ?
            ids.includes(player.playerId) ? 
            {...player, playerCharacter: Math.max(0, player.playerCharacter + amount)}
            : player 
          : players.length === 3 ?
            ids.length === 2 ?
              ids.includes(player.playerId) ?
              {...player,playerCharacter: Math.max(0, player.playerCharacter + 1)}
              : player
            : ids.includes(player.playerId) ?
              {...player, playerCharacter: Math.max(0, player.playerCharacter + 2 * (amount))}
              : player
          : players.length === 2 &&
            ids.includes(player.playerId) ?
            {...player, playerCharacter: Math.max(0, player.playerCharacter + amount)}
            : player
        )
      )
      setTurnEnded(true)
    }

  return (
    <div className={styles['spin-result-default-turn-content']}>
      <h1 className={styles['spin-result-default-rule']}>{rule}</h1>
      <p className={styles['spin-result-default-message']}>{message}</p>
      <img className={`${styles['spin-result-default-turn-image']} ${styles[`${animation}`]}`} src={icon}></img>
      <p className={styles['spin-result-default-playing-for']}>
        {players.length === 4 && 
          <li>Playing for 4</li>}
        {players.length === 3 && 
          <>
            <li>Team 1 - playing for 1</li>
            <li> Team 2 - playing for 8</li>
          </>
          }
        {players.length === 2 && 
          <li>Playing for 4</li>}
      </p>
      <div className={styles['spin-result-default-button-container']}>
        <button className={`${styles['spin-result-team-player-button']}`} onClick={() => handleTeamUpdatePlayers(players, firstAndLast, movement)}>
          <div className={`${styles[`player-${firstPlaceColor}`]}`}></div>
          <p className={styles['button-label']}>Team 1</p>
          {players.length === 3 && <div className={`${styles[`player-${thirdPlaceColor}`]}`}></div>}
          {fourthPlaceColor && <div className={`${styles[`player-${fourthPlaceColor}`]}`}></div>}
        </button>
        <button className={`${styles['spin-result-team-player-button']}`} onClick={() => handleTeamUpdatePlayers(players, secondAndThird, movement)}>
          <div className={`${styles[`player-${secondPlaceColor}`]}`}></div>
          <p className={styles['button-label']}>Team 2</p>
          {players.length !== 3 && thirdPlaceColor && <div className={`${styles[`player-${thirdPlaceColor}`]}`}></div>}
        </button>
      </div>
      <p className={styles['spin-result-default-click']}>Click winner</p>
    </div>
  )
}

export default SpinResultTeam