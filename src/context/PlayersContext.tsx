import { createContext } from 'react'

export interface PlayerType {
  playerName: string;
  playerCharacter: number;
  playerId: number;
}

export interface PlayersContextType {
  players: PlayerType[];
  setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>;
  leadingPlayer: PlayerType | null;
}

export const PlayersContext = createContext<PlayersContextType | null>(null);
