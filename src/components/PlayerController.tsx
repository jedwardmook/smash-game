import charactersArray from '../assets/charactersArray'

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface PlayerControllerProps {
  players: PlayerType[],
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>
}

const PlayerController = ({players, setPlayers}: PlayerControllerProps) => {

  const handleDecreaseIncreaseCharacterClick = (id: number, amount: number) => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player =>
        player.playerId === id
        ? {...player, playerCharacter: Math.max(0, player.playerCharacter + amount)}
        : player
      )
    );
  }

  return (
    <div>
      {players.map((player, index) => {
        return (
          <div key={index} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <p>{player.playerName}</p>
            {charactersArray.map((_character: object, index: number) => {
              return (
                index === player.playerCharacter ?
                  <img src={charactersArray[player.playerCharacter].image} style={{width: '30px'}}></img>
                  : <p>•</p>
              )
            })}
            <div style={{display: 'flex'}}>
              <button onClick={() => handleDecreaseIncreaseCharacterClick(player.playerId, -1)}>-</button>
              <button onClick={() => handleDecreaseIncreaseCharacterClick(player.playerId, 1)}>+</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerController