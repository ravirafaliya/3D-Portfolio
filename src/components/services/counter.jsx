import React from 'react'

const counter = ({from,to,text}) => {
  return (
    <div className='counter'>
        <h1>{to}+</h1>
        <p>{text}</p>
    </div>
  )
}

export default counter