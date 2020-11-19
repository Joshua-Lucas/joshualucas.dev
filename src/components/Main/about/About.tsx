import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { db } from '../../../firebase'

//Styled Components
const AboutContainer = styled.div``
//Interfaces

//React Component
const About: React.FC = () => {
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
      <AboutContainer>
        <h2>Hi, I am Joshua Lucas. Pleasure to meet you.</h2>
        <p>
          I am a self-taught fullstack developer who is passionate about
          developing intuitive, responsive software with the user in mind. I am
          driven, hardworking, honest, and a loyal team player. I am a quick
          learner, perpetually seeking to sharpen my skills and grow in my
          knowledge of software development.
        </p>
        <p>
          When I am not at my computer, you can find me enjoying the outdoors
          with my wife, trying a new restaurant, or conversing with a friend
          over a cup of coffee.
        </p>
        {console.log(skillsData)}{' '}
        {/* Change from console log to skills container */}
      </AboutContainer>
    </>
  )
}
export default About
