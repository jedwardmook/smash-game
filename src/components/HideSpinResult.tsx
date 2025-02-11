
interface HideSpinResultProps {
  spinnerSpinning: boolean,
  rule: string,
  icon: string,
  animation: string,
}

const HideSpinResult = ({spinnerSpinning, rule, icon, animation}: HideSpinResultProps) => {
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
        <div>
          <p>{rule}</p>
          <img src={icon} />
          <p>{animation}</p>
        </div>
        )
      }
    </>
  )
}

export default HideSpinResult