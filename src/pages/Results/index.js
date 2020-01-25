import "./results.scss"

import React, { useContext } from "react"

import { Context } from "../../services/Context"
import { Link } from "react-router-dom"
import Loader from "../../components/Loader"
import PicksLogo from "../../assets/img/illustrations/pick.png"
import Plant from "../../components/Plant"
import Sidebar from "../../components/Sidebar"

const Results = () => {
  const [CONTEXT, setCONTEXT] = useContext(Context)
  const plants = CONTEXT.plants
  return (
    <>
      <Sidebar />
      <div className="results">
        <div className="results__text">
          <img className="results__image" src={PicksLogo} alt="Picks" />
          <h1 className="results__title">Our picks for you</h1>
        </div>
        <div className="results__list">
          {plants === null ? (
            <Loader />
          ) : plants ? (
            plants.map((plant, index) => <Plant key={index} plant={plant} />)
          ) : (
            <>
              {/* Fetch error feedback should be improved. */}
              <h4 style={{ width: "100%", textAlign: "center" }}>
                There are no loaded plants :({" "}
              </h4>
              <p style={{ color: "#d2d2d2" }}>
                Check console for error details
              </p>
              <Link to="/" style={{ width: "100%" }}>
                <p style={{ textAlign: "center" }}>Go back</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}
export default Results
