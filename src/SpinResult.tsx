import React from 'react'

interface SpinResultProps {
  message: string
}

const SpinResult = ({message}: SpinResultProps) => {
  return (
    <div>
      {message}
    </div>
  )
}

export default SpinResult