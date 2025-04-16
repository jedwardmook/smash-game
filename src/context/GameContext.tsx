import { createContext } from 'react'

export interface GameBoardTileType {
  id: number;
  character: string;
  backGroundImage: string;
}

export interface GameType {
  gameEndCharacter: number;
  gameBoard: GameBoardTileType[];
}

export interface GameContextType {
  game: GameType;
  setGame: React.Dispatch<React.SetStateAction<GameType>>;
  gameOver: boolean;
}

export const GameContext = createContext<GameContextType | null>(null);