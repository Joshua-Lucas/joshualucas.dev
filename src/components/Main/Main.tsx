import React from 'react'
import Introduction from './about/Intorduction'

//INTERFACE
interface Skills {
  _id: string
  title: string
  subTitle: string
  accomplished: string
  intro: string
  categoryTitle: string
  categoryData: string[]
  subCategoryTitle: string
  subCategoryData: string[]
}

export interface ISkillsData {
  skills: Skills[]
}

//REACT COMPONENT
const Main: React.FC<ISkillsData> = ({ skills }) => {
  return (
    <>
      <main>
        <Introduction skills={skills} />
      </main>
    </>
  )
}

export default Main
