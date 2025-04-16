import characterTilesArray from '../assets/characterTilesArray'
import { ReactNode, useEffect, useState } from 'react';
import { GameContext, GameType } from './GameContext';
import { usePlayersContext } from './usePlayersContext';

interface GameProviderProps {
  children: ReactNode;
  initialGame?: GameType;
}

const ultimateGameBoard = characterTilesArray

export const GameProvider: React.FC<GameProviderProps> = ({ 
  children,
  initialGame = {
    gameEndCharacter: 87,
    gameBoard: ultimateGameBoard,
  }
}) => {
  const [game, setGame] = useState<GameType>(initialGame)
  const [gameOver, setGameOver] = useState(false)
  const { players, leadingPlayer } = usePlayersContext()

  useEffect(() => {
    if (leadingPlayer?.playerCharacter === game.gameEndCharacter) {
      console.log(`${leadingPlayer.playerName} has won the game!`)
      setGameOver(true)
    }
  }, [players, leadingPlayer, game.gameEndCharacter])

  return (
    <GameContext.Provider value={{ game, setGame, gameOver }}>
      {children}
    </GameContext.Provider>
  )
}