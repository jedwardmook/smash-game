import { ReactNode, useEffect, useState } from 'react';
import { PlayersContext, PlayerType } from './PlayersContext';

interface PlayersProviderProps {
  children: ReactNode;
}

export const PlayersProvider: React.FC<PlayersProviderProps> = ({ 
  children,
}) => {
  const [players, setPlayers] = useState<PlayerType[]>([])
  const [leadingPlayer, setLeadingPlayer] = useState<PlayerType | null>(null)

  useEffect(() => {
    const sortedPlayers = [...players].sort((a, b) => a.playerCharacter - b.playerCharacter);
    setLeadingPlayer(sortedPlayers.length > 0 ? sortedPlayers[sortedPlayers.length - 1] : null);
  }, [players]);

  return (
    <PlayersContext.Provider value={{ players, setPlayers, leadingPlayer }}>
      {children}
    </PlayersContext.Provider>
  )
}