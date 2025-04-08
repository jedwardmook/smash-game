import { ReactNode, useState } from 'react';
import { PlayersContext, PlayerType } from './PlayersContext';

interface PlayersProviderProps {
  children: ReactNode;
}

export const PlayersProvider: React.FC<PlayersProviderProps> = ({ 
  children,
}) => {
  const [players, setPlayers] = useState<PlayerType[]>([])

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  )
}