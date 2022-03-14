import React from 'react'
type ContentsProps = {
    contacts: any;
}

const Contents: React.FC<ContentsProps> = (props) => {
  return (
    <div>
        {props.contacts.map((prop: any) => (
            <div>
                <p>Name: {prop.name}<br/>Number: {prop.phonenumber}</p>
            </div>
        ))}
        <p className="">Number of entries: {props.contacts.length}</p>
    </div>
  )
}

export default Contents