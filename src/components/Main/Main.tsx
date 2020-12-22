import React from 'react'
import About from './about/About'

interface IMain {
  skills: []
}

const Main: React.FC<IMain> = ({ skills }) => {
  const test = skills

  return (
    <>
      <main>
        <About />
        {console.log(test)}
      </main>
    </>
  )
}

export default Main
