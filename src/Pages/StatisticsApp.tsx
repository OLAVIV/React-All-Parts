import React, { useState } from 'react'
import { Link } from "react-router-dom";
type StatisticsProps = {

}

const Statistics: React.FC<StatisticsProps> = () => {

  document.title = "Statistics App"
  const [hyvä, setHyvä] = useState(0)
  const [neutraali, setNeutraali] = useState(0)
  const [huono, setHuono] = useState(0)

  const hanskaaHyvä = (event: React.MouseEvent<HTMLButtonElement>) => {
    setHyvä(hyvä + 1)
  }
  const hanskaaNeutraali = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNeutraali(neutraali + 1)
  }
  const hanskaaHuono = (event: React.MouseEvent<HTMLButtonElement>) => {
    setHuono(huono + 1)
  }
  return (
    <div>
      <div>
        <h1>Anna palautetta</h1>
        <button onClick={hanskaaHyvä}>
          Hyvä
        </button>
        <button onClick={hanskaaNeutraali}>
          Neutraali
        </button>
        <button onClick={hanskaaHuono}>
          Huono
        </button>
        <h2>Statistiikka</h2>
        <h3>
          {"Hyvä " + hyvä}
        </h3>
        <h3>
          {"Neutraali " + neutraali}
        </h3>
        <h3>
          {"Huono " + huono}
        </h3>
      </div>
      <Link to='./'>Back</Link>
    </div>
  )
}

export default Statistics
