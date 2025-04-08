import { useState } from 'react'
import styles from '../styles/create-game.module.css'
import { usePlayersContext } from '../context/usePlayersContext';
import Welcome from './Welcome';

interface HandleInputChange {
  (index: number, name: string): void;
}

interface CreateGameProps {
  setShowCreateGame: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateGame = ({
  setShowCreateGame,
}: CreateGameProps) => {
  const { setPlayers } = usePlayersContext()
  const [playerAmount, setPlayerAmount] = useState<number>(0);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
 
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
  }
  

  return (
    <div className={styles['create-game-container']}>
      <form className={styles['create-game-form']}>
        <div className={styles['create-game-shadow']}>
          <div className={styles['create-game-header-container']}>
            <div className={styles['create-game-title-container']}>
              <h1 className={styles['create-game-title']}>The Ultimate Game</h1>
            </div>
          </div>
        </div>
        <h2 className={styles['title-subheader']}>The Super Smash Brothers Board Game</h2>
        {/* {showWelcome ? (
          <Welcome setShowWelcome={setShowWelcome}/>
          ) : ( */}
          <>
            <h3 className={styles['new-game']}>Create a new game</h3>
            <div className={styles['player-amount']}>
              <label htmlFor='playerAmount'>How many players? </label>
              <select name='playerAmount' id='playerAmount' value={playerAmount} onChange={(e) => handlePlayerSelectChange(e)}>
                <option value='0'>Select</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </div>
          </>
          {/* ) */}
        {/* } */}
        {playerNames.map((playerName, index) => (
          <div className={styles['player-name']} key={index}>
            <label htmlFor={playerName}>Player {index + 1}: </label>
            <input
              key={index}
              type='text'
              value={playerName}
              onChange={(e) => handleNamesChange(index, e.target.value)}
              placeholder="name"
              className={styles['player-name-input']}
            />
          </div>
        ))}
        {playerAmount !== 0 && <button type='button' onClick={createPlayersClick} className={styles['create-game-button']}>Create Game</button>}
      </form>
    </div>
  )
}

export default CreateGame