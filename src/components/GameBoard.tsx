import React from 'react'
import GameSquare from './GameSquare'

const GameBoard = () => {
  const gameTileData =[
    {
      id: 1,
      character: 'Mario',
      player1: true,
      player2: true,
      player3: false,
      player4: true,
    },
    // {
    //   id: 2,
    //   character: 'The Monkey',
    //   player1: false,
    //   player2: false,
    //   player3: false,
    //   player4: false,
    // },
    // {
    //   id: 3,
    //   character: 'Elf',
    //   player1: false,
    //   player2: false,
    //   player3: false,
    //   player4: false,
    // },
    // {
    //   id: 4,
    //   character: 'Metroid',
    //   player1: false,
    //   player2: false,
    //   player3: false,
    //   player4: false,
    // },
  ]

  const gameBoardMap = gameTileData.map((tile) => {
    return (
      <GameSquare
        key={tile.id}
        tile={tile} 
      />
    )
  })

  return (
    <div style={{display: 'flex'}}>{gameBoardMap}</div>
  )
}

export default GameBoard