import React from 'react'

interface HideSpinResultProps {
  spinnerSpinning: boolean,
}

const HideSpinResult = ({spinnerSpinning}: HideSpinResultProps) => {
  return (
    <div>
      {spinnerSpinning? (
        <p>HideSpinResult</p>
        )
      :
        (
        <p>Spin for next rule</p>
        )
      }
    </div>
  )
}

export default HideSpinResult