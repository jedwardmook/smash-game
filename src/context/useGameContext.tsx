import { useContext } from 'react';
import { GameContext, GameContextType } from './GameContext';

export const useGameContext = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context
};