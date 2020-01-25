import HighSun from "../assets/img/icons/coral/high-sun.svg"
import LowSun from "../assets/img/icons/coral/low-sun.svg"
import NoPet from "../assets/img/icons/coral/no-answer.svg"
import NoSun from "../assets/img/icons/coral/no-answer.svg"
import OneDrop from "../assets/img/icons/green/one-drop.svg"
import Pet from "../assets/img/icons/coral/pet.svg"
import ThreeDrops from "../assets/img/icons/green/three-drops.svg"
import Toxic from "../assets/img/icons/grey/toxic.svg"
import TwoDrops from "../assets/img/icons/green/two-drops.svg"

export const Images = {
  highSun: HighSun,
  lowSun: LowSun,
  noSun: NoSun,
  dailyWater: ThreeDrops,
  regularlyWater: TwoDrops,
  rarelyWater: OneDrop,
  pet: Pet,
  noPet: NoPet,
  toxic: Toxic
}

// to-do
// turn current sunlight/water/pets into a single page
// pass config as props for these components
// migrate changes to be made on the context

export default {
  SUNLIGHT: {
    color: "coral",
    type: "sunlight",
    options: [
      {
        label: "High sunlight",
        src: HighSun,
        value: "high"
      },
      {
        label: "Low sunlight",
        src: LowSun,
        value: "low"
      },
      {
        label: "No sunlight",
        src: NoSun,
        value: "no"
      }
    ]
  },
  WATER: {
    color: "green",
    type: "water",
    options: [
      {
        label: "Rarely",
        src: OneDrop,
        value: "rarely"
      },
      {
        label: "Regularly",
        src: TwoDrops,
        value: "regularly"
      },
      {
        label: "Daily",
        src: ThreeDrops,
        value: "daily"
      }
    ]
  },
  PET: {
    color: "coral",
    type: "pets",
    options: [
      {
        label: "Yes",
        src: Pet,
        value: "true"
      },
      {
        label: "No",
        src: NoPet,
        value: "false"
      }
    ]
  }
}
