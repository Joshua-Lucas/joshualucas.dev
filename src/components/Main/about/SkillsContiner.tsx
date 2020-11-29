import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../../../firebase'
import SkillsComponent from './SkillsComponent'

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

  var lang = skillsData[0]
  var skills = skillsData[1]
  var tools = skillsData[2]
  return (
    <>
      <SkillsWrapper>
        {console.log(lang, skills, tools)}{' '}
        <SkillsComponent langs={lang} skills={skills} tools={tools} />
      </SkillsWrapper>
    </>
  )
}
export default SkillsContiner
