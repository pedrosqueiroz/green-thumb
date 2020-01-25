import "./plant.scss"

import React, { useContext } from "react"

import { Context } from "../../services/Context"
import { Images } from "../../services/config"
import { Link } from "react-router-dom"

const Plant = props => {
  const [CONTEXT, setCONTEXT] = useContext(Context)
  const { name, url, sun, water, toxicity, price } = props.plant

  const sunImg = () => {
    return sun === "high"
      ? Images.highSun
      : sun === "low"
      ? Images.lowSun
      : Images.noSun
  }
  const waterImg = () => {
    return water === "daily"
      ? Images.dailyWater
      : water === "regularly"
      ? Images.regularlyWater
      : Images.rarelyWater
  }
  const toxicityImg = () => {
    return toxicity ? Images.toxic : null
  }
  const handleClick = async () => {
    await setCONTEXT(context => ({
      ...context,
      chosenPlant: props.plant
    }))
  }
  return (
    <>
      <div className="plant">
        <img src={url} alt={name} className="plant__image" />
        <p className="plant__name">{name}</p>
        <div className="plant__description">
          <p className="plant__price">${price}</p>

          <div className="plant__details">
            <img
              className="plant__tag-image"
              src={sunImg()}
              alt={`${sun} sun`}
            />
            <img
              className="plant__tag-image"
              src={waterImg()}
              alt={`${water} water`}
            />
            {toxicity ? (
              <img
                className="plant__tag-image"
                src={toxicityImg()}
                alt={toxicity ? "Toxic" : "Not toxic"}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <Link to="/purchase" className="plant__purchase" onClick={handleClick}>
          buy now
        </Link>
      </div>
    </>
  )
}
export default Plant
