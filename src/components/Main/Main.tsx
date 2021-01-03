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
function Main({ skills }: ISkillsData) {
  return (
    <>
      <main>
        <Introduction skills={skills} />
      </main>
    </>
  )
}

export default Main
