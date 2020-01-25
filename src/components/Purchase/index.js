import "./Purchase.scss"

import React, { useContext } from "react"

import { Context } from "../../services/Context"
import Form from "../Form"
import { Images } from "../../services/config"
import Sidebar from "../Sidebar"

const Purchase = props => {
  const [CONTEXT, setCONTEXT] = useContext(Context)
  const { name, price, url, sun, water, toxicity } = CONTEXT.chosenPlant
  const capitalizeSunLabel = () =>
    sun.charAt(0).toUpperCase() + sun.substring(1)

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
  return (
    <>
      <div className="purchase-wrapper">
        <div className="purchase">
          <Sidebar />
          <div className="purchase__plant">
            <h1 className="purchase__title">{name}</h1>
            <p className="purchase__price">${price}</p>
            <img src={url} alt={name} className="purchase__image" />
            <div className="purchase__details">
              <div className="details__item">
                <img className="item__image" src={sunImg()} alt={sun} />
                <p className="item__label">{capitalizeSunLabel()} sunlight</p>
              </div>
              <div className="details__item">
                <img className="item__image" src={waterImg()} alt={water} />
                <p className="item__label">Water {water}</p>
              </div>
              {!toxicity ? (
                <div className="details__item">
                  <img className="item__image" src={Images.pet} alt="Toxic" />
                  <p className="item__label">Non-toxic for pets</p>
                </div>
              ) : (
                <div className="details__item">
                  <img className="item__image" src={Images.toxic} alt="Toxic" />
                  <p className="item__label">
                    <span className="bold">Beware!</span> Toxic for pets
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="purchase__form">
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default Purchase
