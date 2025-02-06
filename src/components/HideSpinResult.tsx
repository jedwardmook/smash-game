
interface HideSpinResultProps {
  spinnerSpinning: boolean,
}

const HideSpinResult = ({spinnerSpinning}: HideSpinResultProps) => {
  return (
    <>
      {spinnerSpinning? (
        <div>
          <h1>Spinner Spinning!</h1>
          <h1>Rule en route</h1>
          <h1>What will it be!</h1>
        </div>
        )
        :
        (
        <p>Spin for next rule</p>
        )
      }
    </>
  )
}

export default HideSpinResult