import "./assets/scss/global.scss"

import React from "react"
import Routes from "./routes"
import { ContextProvider } from "./services/Context"
const App = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}
export default App
