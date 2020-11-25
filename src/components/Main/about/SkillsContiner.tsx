import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../../../firebase'
// import SkillsComponent, {ISkillComponent} from './SkillsComponent'

//Styled Components
const SkillsWrapper = styled.div``
//Interfaces

//React Component
const SkillsContiner: React.FC = () => {
  const [skillsData, setSkillsData] = useState([])
  useEffect(function onMount() {
    async function getPosts() {
      var snapshot = await db.collection('skills').get()

      var posts = snapshot.docs.map(function getDocs(doc) {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      setSkillsData(posts)
    }

    getPosts()
  }, [])

  return (
    <>
      <SkillsWrapper>
        {console.log(skillsData)}{' '}
        {/* Change from console log to skills container */}
      </SkillsWrapper>
    </>
  )
}
export default SkillsContiner
