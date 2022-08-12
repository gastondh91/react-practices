import React, { forwardRef, useRef, useState } from 'react'

const ImperativaHandlerComponent = () => {
  const [value, setValue] = useState('red')
  const inputRef = useRef()

  return (
    <>
      <input
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  )
}

export default forwardRef(ImperativaHandlerComponent)
