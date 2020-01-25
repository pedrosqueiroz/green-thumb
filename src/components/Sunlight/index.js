import "./Sunlight.scss"

import Navigation from "../Navigation"
import Option from "../Option"
import React from "react"
import Sidebar from "../Sidebar"
import SunImage from "../../assets/img/illustrations/sun.png"

const Sunlight = props => {
  const SUNLIGHT = props.data

  return (
    <div className="section --sunlight">
      <Sidebar />
      <img
        src={SunImage}
        alt="Sun wearing sunglasses illustration."
        className="section__image"
      />
      <p className="section__text">
        First, set the amount of <span className="bold">sunlight</span> your
        plant will get.
      </p>
      <div className="section__options">
        {SUNLIGHT.options.map((option, index) => (
          <Option
            type={SUNLIGHT.type}
            color={SUNLIGHT.color}
            key={index}
            option={option}
          />
        ))}
      </div>
      <Navigation />
    </div>
  )
}
export default Sunlight
