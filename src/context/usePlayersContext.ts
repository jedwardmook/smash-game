import { useContext } from 'react';
import { PlayersContext, PlayersContextType } from './PlayersContext';

export const usePlayersContext = (): PlayersContextType => {
  const context = useContext(PlayersContext);
  if (!context) {
    throw new Error('usePlayersContext must be used within a PlayersProvider');
  }
  return context
};