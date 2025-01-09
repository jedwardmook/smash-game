import { useState } from 'react'
import { Wheel } from 'react-custom-roulette';

interface GameSpinnerProps {
  setMovement: (movement: number) => void
}

const GameSpinner = ({ setMovement }: GameSpinnerProps) => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const data = [
    { option: '0', style: { backgroundColor: 'lightblue', textColor: 'black' }, image: {uri: '/public/pointing-finger-clipart.svg', sizeMultiplier: 0.5, offsetY: 150 } },
    { option: '1', style: { backgroundColor: 'aqua', textColor: 'blue' } },
    { option: '2', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '3', style: { backgroundColor: 'gold', textColor: 'black' } },
    { option: '4', style: { backgroundColor: 'yellow', textColor: 'black' } },
    { option: '5', style: { backgroundColor: '', textColor: 'blue' } },
    { option: '6', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '7', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '8', style: { backgroundColor: 'white', textColor: 'blue' } },
    { option: '9', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '10', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '11', style: { backgroundColor: 'white', textColor: 'blue' } },
    { option: '12', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '13', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '14', style: { backgroundColor: 'white', textColor: 'blue' } },
    { option: '15', style: { backgroundColor: 'blue', textColor: 'black' } },
  ]
  
  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setMustSpin(true)
    setTimeout(() => {
      setMustSpin(false)
    }, 100)
    setPrizeNumber(newPrizeNumber);
    // setMovement(newPrizeNumber);
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        disableInitialAnimation={false}
        pointerProps={{ src: '/public/pointing-finger-clipart.svg', style: { transform: 'rotate(-100deg)' } }}
        onStopSpinning={() => {
          setMovement(prizeNumber);
        }}
      />
      <button onClick={handleSpinClick}>Spin</button>
    </>
  )
};

export default GameSpinner;