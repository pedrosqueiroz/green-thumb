import "./Navigation.scss"

import React, { useContext } from "react"

import { Context } from "../../services/Context"
import Popup from "../Popup"
import arrow from "../../assets/img/icons/green/arrow.svg"

const Navigation = props => {
  const [CONTEXT, setCONTEXT] = useContext(Context)

  let current_screen = CONTEXT.current_screen
  let screens = CONTEXT.screens
  let showPopup = CONTEXT.showPopup
  const previousScreen = () => {
    setCONTEXT(context => ({
      ...context,
      current_screen: current_screen - 1
    }))
  }
  const nextScreen = () => {
    const togglePopup = () => {
      setCONTEXT(context => ({
        ...context,
        showPopup: true
      }))
      setTimeout(() => {
        setCONTEXT(context => ({
          ...context,
          showPopup: false
        }))
      }, 2600)
    }
    const goNext = () => {
      setCONTEXT(context => ({
        ...context,
        current_screen: current_screen + 1
      }))
    }
    if (CONTEXT.current_screen === 1) {
      if (!CONTEXT.user_answers.sunlight) {
        return togglePopup()
      } else goNext()
    } else if (CONTEXT.current_screen === 2) {
      if (!CONTEXT.user_answers.water) {
        return togglePopup()
      } else goNext()
    } else if (CONTEXT.current_screen === 3) {
      if (CONTEXT.user_answers.pets === null) {
        return togglePopup()
      } else goNext()
    }
  }
  return (
    <>
      {showPopup ? <Popup /> : null}
      <div>
        <div className={`navigation ${props.sizing ? "--small" : ""}`}>
          <div onClick={previousScreen} className="navigation__button">
            <img src={arrow} alt="Arrow" className="button__image" />
            {screens[current_screen].previous}
          </div>

          <div onClick={nextScreen} className="navigation__button">
            <img src={arrow} alt="Arrow" className="button__image --right" />
            {screens[current_screen].next}
          </div>
        </div>
      </div>
    </>
  )
}
export default Navigation
