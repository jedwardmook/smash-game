import React from 'react'

interface SpinResultProps {
  message: string,
  movement: number,
  rule: string,
  icon: string,
  updatePlayerCharacter: (playerCharacterFunction: React.Dispatch<React.SetStateAction<number>>, amount: number) => void,
  setPlayer1Character: React.Dispatch<React.SetStateAction<number>>
  setPlayer2Character: React.Dispatch<React.SetStateAction<number>>
  setPlayer3Character: React.Dispatch<React.SetStateAction<number>>
  setPlayer4Character: React.Dispatch<React.SetStateAction<number>>
  setShowSpinResult: React.Dispatch<React.SetStateAction<boolean>>
}

const SpinResult = ({
  message, 
  movement,
  rule,
  icon,
  updatePlayerCharacter, 
  setPlayer1Character,
  setPlayer2Character,
  setPlayer3Character,
  setPlayer4Character,
  setShowSpinResult, 
  }: SpinResultProps) => {
  return (
    <dialog style={{zIndex: '6', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', borderRadius: '.5rem', alignItems: 'center', width: '33%'}} open>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <button onClick={() => setShowSpinResult(false)}>X</button>
      </div>
      <img src={icon} style={{width: '75px', alignSelf: 'center'}}></img>
      <h2>{rule}</h2>
      {message}
      <div>
        <button onClick={() => updatePlayerCharacter(setPlayer1Character, movement)}>Player 1</button>
        <button onClick={() => updatePlayerCharacter(setPlayer2Character, movement)}>Player 2</button>
        <button onClick={() => updatePlayerCharacter(setPlayer3Character, movement)}>Player 3</button>
        <button onClick={() => updatePlayerCharacter(setPlayer4Character, movement)}>Player 4</button>
      </div>
    </dialog>
  )
}

export default SpinResult