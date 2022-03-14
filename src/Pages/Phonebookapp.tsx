import React from 'react'
import Phonebook from '../Components/Phonebook'
import {Link} from "react-router-dom"; 

type PhonebookAppProps = {

}

const PhonebookApp: React.FC<PhonebookAppProps> = () => {

    document.title = "Phonebook App"

    const phonebook = {
        name: 'Superadvanced phonebook app',
        contacts: [
          {
            name: 'John Doe',
            phonenumber: '358401234567',
            id: 1
          },
          {
            name: 'Jane Doe',
            phonenumber: '44551234567',
            id: 2
          },
          {
            name: 'Foo bar',
            phonenumber: '000',
            id: 3
          }
        ]
      }

  return (
    <div>
        <Phonebook phonebook={phonebook} />
        <Link to='./'>Back</Link>
    </div>
  )
}

export default PhonebookApp