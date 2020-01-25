import React, { useContext } from "react"

import { Context } from "../../services/Context"
import Pets from "../../components/Pets"
import { Redirect } from "react-router-dom"
import Sunlight from "../../components/Sunlight"
import Water from "../../components/Water"

export default function Questions(props) {
  const [CONTEXT, setCONTEXT] = useContext(Context)
  const { SUNLIGHT, WATER, PET } = props.data
  return (
    <div>
      {CONTEXT.current_screen === 0 ? (
        <Redirect to="/" />
      ) : CONTEXT.current_screen === 4 ? (
        <Redirect to="/results" />
      ) : null}
      {CONTEXT.current_screen === 1 ? (
        <Sunlight data={SUNLIGHT} />
      ) : CONTEXT.current_screen === 2 ? (
        <Water data={WATER} />
      ) : CONTEXT.current_screen === 3 ? (
        <Pets data={PET} />
      ) : null}
    </div>
  )
}
