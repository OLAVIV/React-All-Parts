import React from 'react'
import {Link} from "react-router-dom"; 

type ButtonsProps = {

}

const Buttons: React.FC<ButtonsProps> = () => {
  return (
    <div>
      <Link to='phonebookapp'>Phone Book </Link>
      <Link to='statisticsapp'>Statistics </Link>
      <Link to='reminderapp'>Reminders</Link>
    </div>
  )
}

export default Buttons
