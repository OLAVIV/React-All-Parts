import React from 'react'
import Header from './Header'
import Contacts from './Contacts'

type PhonebookProps = {
    phonebook: any;
}

const Phonebook: React.FC<PhonebookProps> = (props) => {

  return (
    <div className="">
        <Header title={ props.phonebook.name } />
        <Contacts contacts={ props.phonebook.contacts } />
    </div>
  )
}

export default Phonebook