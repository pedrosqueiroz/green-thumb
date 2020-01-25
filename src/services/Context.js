import React, { createContext, useState } from "react"

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [CONTEXT, setCONTEXT] = useState({
    is_loading: false,
    showPopup: false,
    plants: null,
    user_answers: {
      sunlight: null,
      water: null,
      pets: "no"
    },
    screens: [
      {
        name: "Home",
        url: "/"
      },
      {
        name: "Sunlight",
        url: "/sunlight",
        previous: "home",
        next: "next"
      },
      {
        name: "Water",
        url: "/water",
        previous: "previous",
        next: "next"
      },
      {
        name: "Pets",
        url: "/pets",
        previous: "previous",
        next: "finish"
      },
      {
        name: "Finish",
        url: "/results"
      }
    ],
    current_screen: 0
  })

  return (
    <Context.Provider value={[CONTEXT, setCONTEXT]}>
      {children}
    </Context.Provider>
  )
}
