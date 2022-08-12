/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import ReactDOM from 'react-dom/client'
// @ts-ignore
import ImperativaHandlerComponent from './UseImperativeHandler/ImperativaHandlerComponent'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ImperativaHandlerComponent />
  </React.StrictMode>
)
