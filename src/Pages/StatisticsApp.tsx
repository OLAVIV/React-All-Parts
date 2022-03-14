import React, { useState } from 'react'
import { Link } from "react-router-dom";
type StatisticsProps = {

}
type StatisticsValueProps = {
  text: string
  value: number
  unit?: string
}
type StatisticsButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  text: string
}

const StatisticsButton: React.FC<StatisticsButtonProps> = (props) => {
  return <button onClick={props.onClick}>
    {props.text}
  </button>
}
const StatisticsValue: React.FC<StatisticsValueProps> = (props) => {
  return <h3>
    {props.text + " "}
    {props.value}
    {props.unit}
  </h3>
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
  const ArvioCount = hyvä + neutraali + huono
  return (
    <div>
      <div>
        <h1>Anna palautetta</h1>
        <StatisticsButton text="Hyvä" onClick={hanskaaHyvä} />
        <StatisticsButton text="Neutraali" onClick={hanskaaNeutraali} />
        <StatisticsButton text="Huono" onClick={hanskaaHuono} />
        <h2>Statistiikka</h2>
        <StatisticsValue text="Hyvä" value={hyvä} />
        <StatisticsValue text="Neutraali" value={neutraali} />
        <StatisticsValue text="Huono" value={huono} />
        <StatisticsValue text="Keskiarvo" value={ArvioCount / 3} />
        {
          ArvioCount > 0 &&
          <StatisticsValue text="Positiivisia" value={(hyvä + neutraali) / ArvioCount * 100} unit="%" />
        }
      </div>
      <Link to='./'>Back</Link>
    </div>
  )
}

export default Statistics
