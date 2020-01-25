import "./Option.scss"

import React, { useContext } from "react"
import { Context } from "../../services/Context"
const Option = props => {
  const [CONTEXT, setCONTEXT] = useContext(Context)
  const { label, src, value } = props.option
  const { type } = props

  const setOption = (type, value) => {
    let user_answers = {
      ...CONTEXT.user_answers
    }

    user_answers[type] = value

    setCONTEXT(context => ({
      ...context,
      user_answers
    }))
  }

  const isActive = () => {
    return value === CONTEXT.user_answers[type] ? " --active" : ""
  }

  const handleClick = () => {
    setOption(type, value)
  }
  return (
    <div
      className={
        `option` +
        (props.color === "coral" ? " --coral" : " --light-green") +
        isActive()
      }
      onClick={handleClick}
    >
      <img src={src} alt={label} className="option__image" />
      <p className="option__title">{label}</p>
    </div>
  )
}
export default Option
