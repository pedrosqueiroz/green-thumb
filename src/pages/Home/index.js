import "./Home.scss"

import React, { useContext } from "react"

import Arrow from "../../assets/img/icons/green/arrow.svg"
import { Context } from "../../services/Context"
import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo/logo-greenthumb.svg"

const Home = () => {
  const [CONTEXT, setCONTEXT] = useContext(Context)
  const handleClick = () => {
    setCONTEXT(context => ({
      ...context,
      current_screen: 1,
      user_answers: {
        sunlight: null,
        water: null,
        pets: null
      }
    }))
  }
  return (
    <div className="container home">
      <img src={Logo} alt="Green Thumb logo." className="home__logo" />
      <div className="home__cta-container">
        <h1 className="home__text">Find your next green friend</h1>
        <Link to="/questions" className="home__button" onClick={handleClick}>
          <img src={Arrow} alt="Right arrow" className="button__image" />
          start quizz
        </Link>
      </div>
    </div>
  )
}
export default Home
