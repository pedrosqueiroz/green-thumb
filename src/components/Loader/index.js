import React, { useContext } from "react"
import { Context } from "../../services/Context"
import getPlants from "../../services/API"

import "./Loader.scss"

const Loader = () => {
  const [CONTEXT, setCONTEXT] = useContext(Context)
  const user_answers = CONTEXT.user_answers

  let data = []

  const fetch = async () => {
    data = await getPlants(user_answers)
    await setCONTEXT(currentContext => ({
      ...currentContext,
      plants: data
    }))
  }
  fetch()
  return <div className="pulsating-circle"></div>
}
export default Loader
