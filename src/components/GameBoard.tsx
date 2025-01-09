import React from 'react'

const GameBoard = () => {
  const gameTileData =[
    {
      id: 1,
      character: 'Mario',
      player1: false,
      player2: false,
      player3: false,
      player4: false,
    },
    {
      id: 2,
      character: 'The Monkey',
      player1: false,
      player2: false,
      player3: false,
      player4: false,
    },
    {
      id: 3,
      character: 'Elf',
      player1: false,
      player2: false,
      player3: false,
      player4: false,
    },
    {
      id: 4,
      character: 'Metroid',
      player1: false,
      player2: false,
      player3: false,
      player4: false,
    },
  ]

  const gameBoardMap = gameTileData.map((tile) => {
    return (
      <div key={tile.id} style={{ border: '1px solid black', width: '150px', height: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '0' }}>
        <h4 style={{ zIndex: '0' }}>{tile.character}</h4>
        {tile.player1 && <div style={{ border: '1px solid black', borderRadius: '100%', backgroundColor: 'red', zIndex: '2' }}>P1</div>}
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  })

  return (
    <div style={{display: 'flex'}}>{gameBoardMap}</div>
  )
}

export default GameBoard