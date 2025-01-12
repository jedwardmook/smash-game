import charactersArray from '../assets/charactersArray'

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
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, 150px)', gridTemplateColumns: 'repeat(2, 150px)', rowGap: '15px', columnGap: '7.5px', padding: '10px' }}>
      {playersArray.map((player, index) => {
        return (
          <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px', height: '150px', border: '2px solid black', borderRadius: '8px', background: 'grey'}}>
            <div style={{borderRadius: '6px 6px 0 0', background: 'white', width: '100%', textAlign: 'center', borderBottom: '1px solid black'}}>
              <p style={{paddingTop: '0', margin: '0', fontSize: '1.25rem', color: 'black', fontWeight: 'bold'}}>{player.playerName}</p>
            </div>
            <img src={player.playerCharacterImage} style={{width: '75px'}}></img>
            <p style={{margin: '0', padding: '0', fontWeight: 'bold'}}>{player.playerCharacter}</p>
          </div>
        )
      }
    )}
    </div>
  )
}

export default Standings