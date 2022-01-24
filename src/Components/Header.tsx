import React from 'react'

type HeaderProps = {
    title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="">
        <h1 className="">{ props.title }</h1>
    </div>
  )
}

export default Header