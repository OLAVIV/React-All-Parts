import React from 'react'
import Header from './Header'
import Contents from './Contents'

type PhonebookProps = {
    phonebook: any;
}

const Phonebook: React.FC<PhonebookProps> = (props) => {

  return (
    <div className="">
        <Header title={ props.phonebook.name } />
        <Contents contacts={ props.phonebook.contacts } />
    </div>
  )
}

export default Phonebook