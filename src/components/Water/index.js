import "./Water.scss"

import React from "react"

import Navigation from "../Navigation"
import Option from "../Option"
import Sidebar from "../Sidebar"
import WateringCan from "../../assets/img/illustrations/wateringcan.png"

const Water = props => {
  const WATER = props.data

  return (
    <div className="section --water">
      <Sidebar />
      <img
        src={WateringCan}
        alt="Happy watering can illustration."
        className="section__image"
      />
      <p className="section__text">
        How often do you want to <span className="bold">water</span> your plant?
      </p>
      <div className="section__options --water">
        {WATER.options.map((option, index) => (
          <Option
            type={WATER.type}
            color={WATER.color}
            key={index}
            option={option}
          />
        ))}
      </div>
      <Navigation />
    </div>
  )
}
export default Water
