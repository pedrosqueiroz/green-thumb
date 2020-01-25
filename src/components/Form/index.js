import "./styles.scss"

import React, { Component } from "react"

import Envelop from "../../assets/img/illustrations/envelop.png"
import Warning from "../../assets/img/illustrations/warning.svg"

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      emailIsValid: true,
      mailSent: false
    }
  }
  handleInput = e => {
    this.setState({
      email: e.target.value
    })
    if (this.state.email.length > 9) {
      this.setState({
        emailIsValid: true
      })
    } else {
      this.setState({
        emailIsValid: false
      })
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({ mailSent: true })
  }
  render() {
    return (
      <form className="form">
        {this.state.mailSent ? (
          <>
            <h1 className="form__title --center">Thank you!</h1>
            <p className="form__description --center">
              You will hear from us soon. Please check your e-mail!
            </p>
            <img src={Envelop} alt="Envelop" className="form__envelop" />
          </>
        ) : (
          <>
            <h1 className="form__title">Nice pick!</h1>
            <p className="form__description">
              Tell us your name and e-mail and we will get in touch regarding
              your order ;)
            </p>
            <div className="input-group">
              <label className="input-group__label" htmlFor="name">
                Name
              </label>
              <input
                className="input-group__input"
                onChange={e => this.setState({ name: e.target.value })}
                type="text"
                id="name"
                placeholder="Crazy Plant Person"
              />
            </div>
            <div className="input-group">
              <label
                className={`input-group__label ${
                  this.state.emailIsValid ? "" : "invalid"
                }`}
                htmlFor="name"
              >
                E-mail
              </label>
              <input
                className={`input-group__input ${
                  this.state.emailIsValid ? "" : "invalid"
                }`}
                onChange={this.handleInput}
                type="text"
                id="email"
                placeholder="plantperson@email.com"
              />
              {!this.state.emailIsValid ? (
                <p className="email-invalid">
                  <img
                    src={Warning}
                    alt="Attention."
                    className="invalid-icon"
                  />
                  Please provide a valid e-mail.
                </p>
              ) : null}
              <div className="form__submit-box">
                <input
                  className="form__submit"
                  type="submit"
                  value="send"
                  onClick={this.handleSubmit}
                />
              </div>
            </div>
          </>
        )}
      </form>
    )
  }
}
