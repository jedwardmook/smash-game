import { useState } from 'react'
import styles from '../styles/create-game.module.css'

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
    const amount = parseInt(e.target.value); // creates amount of players
    setPlayerAmount(amount); // sets the amount of players
    setPlayerNames(Array(amount).fill('')); // creates an array of empty string for each player name
  }

  const handleNamesChange: HandleInputChange = (index, name) => {
    const newPlayerNames = [...playerNames]; // creates a new array of player names
    newPlayerNames[index] = name; // takes the index of the input and sets the name to the new array at that index
    setPlayerNames(newPlayerNames); // sets the playerNames array to those names
  }

  const createPlayersClick = () => {
    const players = playerNames.map((name, index) => ({
      playerName: name !== '' ? name : `Player ${index + 1}`,
      playerCharacter: 0, 
      playerId: index + 1
    }))
    setPlayers(players)
    setShowCreateGame(false)
    console.log(players)
  }

  

  return (
    <div className={styles['create-game-container']}>
      <form className={styles['create-game-form']}>
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
        {playerAmount !== 0 && <button type='button' onClick={createPlayersClick}>Create Game</button>}
      </form>
    </div>
  )
}

export default CreateGame