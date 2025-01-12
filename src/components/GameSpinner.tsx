import { useState } from 'react'
import { Wheel } from 'react-custom-roulette';

interface GameSpinnerProps {
  setOptionNumber: (optionNumber: number) => void
  setShowSpinResult: (showSpinResult: boolean) => void
}

const GameSpinner = ({
  setOptionNumber,
  setShowSpinResult }: GameSpinnerProps) => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const data = [
    { option: '0', style: { backgroundColor: 'lightblue', textColor: 'black' }, image: {uri: '/public/pointing-finger-clipart.svg', sizeMultiplier: 0.5, offsetY: 250 } },
    { option: '1', style: { backgroundColor: 'aqua', textColor: 'blue' }, image: {uri: '/public/pokeball.svg', sizeMultiplier: 0.8, offsetY: 250 } },
    { option: '2', style: { backgroundColor: 'blue', textColor: 'black' }, image: {uri: '/public/poison-mushroom.svg', sizeMultiplier: 0.75, offsetY: 250 } },
    { option: '3', style: { backgroundColor: 'gold', textColor: 'black' }, image: {uri: '/public/salute.svg', sizeMultiplier: 0.75, offsetY: 230, offsetX: 10 } },
    { option: '4', style: { backgroundColor: 'yellow', textColor: 'black' }, image: {uri: '/public/mushroom.svg', sizeMultiplier: 0.75, offsetY: 250 } },
    { option: '5', style: { backgroundColor: '', textColor: 'blue' }, image: {uri: '/public/blueshell.svg', sizeMultiplier: 0.75, offsetY: 250 } },
    { option: '6', style: { backgroundColor: 'blue', textColor: 'black' }, image: {uri: '/public/greenshell.svg', sizeMultiplier: 0.75, offsetY: 250 } },
    { option: '7', style: { backgroundColor: 'green', textColor: 'black' }, image: {uri: '/public/sink.svg', sizeMultiplier: 0.75, offsetY: 250 } },
    { option: '8', style: { backgroundColor: 'white', textColor: 'blue' }, image: {uri: '/public/smash.svg', sizeMultiplier: 0.75, offsetY: 250, offsetX: -10 } },
    { option: '9', style: { backgroundColor: 'blue', textColor: 'black' }, image: {uri: '/public/100.svg', sizeMultiplier: 0.70, offsetY: 250 } },
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
  };

  const handleSpinStop = () => {
    setOptionNumber(prizeNumber);
    setShowSpinResult(true);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        disableInitialAnimation={false}
        pointerProps={{ src: '/public/pointing-finger-clipart.svg', style: { transform: 'rotate(-100deg)', width: '65px' } }}
        onStopSpinning={() => {
          handleSpinStop();
        }}
      />
      <button onClick={handleSpinClick}>Spin</button>
    </div>
  )
};

export default GameSpinner;