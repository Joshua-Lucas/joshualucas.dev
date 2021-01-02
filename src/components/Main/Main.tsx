import React from 'react'
import Introduction from './about/Intorduction'


interface IMain {
  skills: []
}

const Main: React.FC<IMain> = ({ skills }) => {
  const test = skills

  return (
    <>
      <main>
        <Introduction />
        {console.log(test)}
      </main>
    </>
  )
}

export default Main
