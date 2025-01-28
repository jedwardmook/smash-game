import React from 'react'

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface SpinResultProps {
  message: string,
  movement: number,
  rule: string,
  icon: string,
  updatePlayerCharacter: (id: number, amount: number) => void,
  setShowSpinResult: React.Dispatch<React.SetStateAction<boolean>>,
  players: PlayerType[],
}

const SpinResult = ({
  message, 
  movement,
  rule,
  icon,
  updatePlayerCharacter, 
  setShowSpinResult, 
  players,
  }: SpinResultProps) => {
  return (
    <dialog style={{zIndex: '6', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', borderRadius: '.5rem', alignItems: 'center', width: '33%'}} open>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <button onClick={() => setShowSpinResult(false)}>X</button>
      </div>
      <img src={icon} style={{width: '150px', alignSelf: 'center', transform: 'rotate(180deg)'}}></img>
      <h2>{rule}</h2>
      {message}
      <div>
        {players.map((player) => (
          <button onClick={() => updatePlayerCharacter(player.playerId, movement)} key={player.playerId}>{player.playerName}</button>
        ))}
      </div>
    </dialog>
  )
}

export default SpinResult