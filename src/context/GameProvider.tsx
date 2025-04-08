import characterTilesArray from '../assets/characterTilesArray'
import { ReactNode, useState } from 'react';
import { GameContext, GameType } from './GameContext';

interface GameProviderProps {
  children: ReactNode;
  initialGame?: GameType;
}

const ultimateGameBoard = characterTilesArray

export const GameProvider: React.FC<GameProviderProps> = ({ 
  children,
  initialGame = {
    gameEndCharacter: 89,
    gameBoard: ultimateGameBoard,
  }
}) => {
  const [game, setGame] = useState<GameType>(initialGame)

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  )
}