import { useState } from 'react'

interface HandleInputChange {
  (index: number, name: string): void;
}

interface PlayerType {
  playerName: string,
  playerCharacter: number,
  playerId: number,
}

interface CreateGameProps {
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
  setShowCreateGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateGame = ({
  setPlayers,
  setShowCreateGame,
}: CreateGameProps) => {
  const [playerAmount, setPlayerAmount] = useState<number>(0);
  const [playerNames, setPlayerNames] = useState<string[]>([]);

  const handlePlayerSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const amount = parseInt(e.target.value);
    setPlayerAmount(amount);
    setPlayerNames(Array(amount).fill(''));
  }

  const handleNamesChange: HandleInputChange = (index, name) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  }

  const createPlayersClick = () => {
    const players = playerNames.map((name, index) => ({
      playerName : name,
      playerCharacter : 0, 
      playerId : index + 1
    }))
    setPlayers(players)
    setShowCreateGame(false)
  }

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', zIndex: '10' }}>
        <h2>Create a new game</h2>
        <label htmlFor='playerAmount'>How many players?</label>
        <select name='playerAmount' id='playerAmount' value={playerAmount} onChange={(e) => handlePlayerSelectChange(e)}>
          <option value='0'>Select</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        {playerNames.map((playerName, index) => (
          <div>
            <label htmlFor={playerName}>Player {index + 1}</label>
            <input
              key={index}
              type='text'
              value={playerName}
              onChange={(e) => handleNamesChange(index, e.target.value)}
              placeholder='Name'
            />
          </div>
        ))}
        <button type='button' onClick={createPlayersClick}>Create Game</button>
      </form>
    </div>
  )
}

export default CreateGame