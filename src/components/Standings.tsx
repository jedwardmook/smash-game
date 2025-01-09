interface StandingsProps {
  charactersArray: string[],
  player1Character: number,
  player2Character: number,
  player3Character: number,
  player4Character: number,
}

const Standings = ({
  charactersArray,
  player1Character,
  player2Character,
  player3Character,
  player4Character
}: StandingsProps) => {

  const playersArray = [
    {
      playerName: "John",
      playerCharacter: charactersArray[player1Character],
    },
    {
      playerName: "Danny",
      playerCharacter: charactersArray[player2Character],
    },
    {
      playerName: "Ben",
      playerCharacter: charactersArray[player3Character],
    },
    {
      playerName: "Dan",
      playerCharacter: charactersArray[player4Character],
    },
  ]

  return (
    <div>
      {playersArray.map((player, index) => {
        return (
          <p key={index}>{player.playerName} : {player.playerCharacter}</p>
        )
      }
    )}
    </div>
  )
}

export default Standings