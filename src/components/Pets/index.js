import "./Pets.scss"

import React from "react"

import Dog from "../../assets/img/illustrations/dog.png"
import Navigation from "../Navigation"
import Sidebar from "../Sidebar"
import Option from "../Option"

const Pets = props => {
  const PET = props.data

  return (
    <div className="section --pets">
      <Sidebar />
      <img
        src={Dog}
        alt="Friendly dog illustration."
        className="section__image"
      />
      <p className="section__text --large">
        Do you have pets? Do they <span className="bold">chew</span> plants?
      </p>
      <p className="section__text --small">
        We are asking because some plants may be{" "}
        <span className="bold">toxic</span> for your buddy.
      </p>
      <div className="section__options --small --pets">
        {PET.options.map((option, index) => (
          <Option
            type={PET.type}
            color={PET.color}
            key={index}
            option={option}
          />
        ))}
      </div>
      <Navigation previous="water" next="results" sizing="--small" />
    </div>
  )
}

export default Pets
