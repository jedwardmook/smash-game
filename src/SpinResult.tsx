import React from 'react'

interface SpinResultProps {
  message: string,
  movement: number,
  updatePlayerCharacter: (playerCharacterFunction: React.Dispatch<React.SetStateAction<number>>, amount: number) => void,
  setPlayer1Character: React.Dispatch<React.SetStateAction<number>>
  setPlayer2Character: React.Dispatch<React.SetStateAction<number>>
  setPlayer3Character: React.Dispatch<React.SetStateAction<number>>
  setPlayer4Character: React.Dispatch<React.SetStateAction<number>>
}

const SpinResult = ({
  message, 
  movement,
  updatePlayerCharacter, 
  setPlayer1Character,
  setPlayer2Character,
  setPlayer3Character,
  setPlayer4Character, 
  }: SpinResultProps) => {
  return (
    <dialog style={{zIndex: '6'}} open>
      {message}
      <button onClick={() => updatePlayerCharacter(setPlayer1Character, movement)}>Player 1</button>
      <button onClick={() => updatePlayerCharacter(setPlayer2Character, movement)}>Player 2</button>
      <button onClick={() => updatePlayerCharacter(setPlayer3Character, movement)}>Player 3</button>
      <button onClick={() => updatePlayerCharacter(setPlayer4Character, movement)}>Player 4</button>
    </dialog>
  )
}

export default SpinResult