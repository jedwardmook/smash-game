import { usePlayersContext } from "../context/usePlayersContext"

const WinnerScreen = () => {
  const { leadingPlayer } = usePlayersContext()

  return (
    <div>{leadingPlayer?.playerName}</div>
  )
}

export default WinnerScreen