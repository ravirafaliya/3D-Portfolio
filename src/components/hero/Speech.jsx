import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Speech = () => {
  return (
    <div className='bubbleContainer'>
        <div className="bubble">
        <TypeAnimation
      sequence={[
        1000, // wait 1s before typing out the first string
        // Same substring at the start will only be typed out once, initially
        'lorem10    ipsum10    dolor10    sit10    amet10    consectetur10    adipisicing10    elit10',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
    //   omitDeletionAnimation
      repeat={Infinity}
    />
        </div>
        <img src="/man.png" alt="" />
    </div>
  )
}

export default Speech