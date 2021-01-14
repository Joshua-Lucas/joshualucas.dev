import head from 'next/head'
import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import { skills, connectToDB } from '../db'

export default function Home({ skills }) {
  return (
    <>
      <head>
        <title>Joshua Lucas</title>
      </head>
      <Header />
      <Main skills={skills} />
    </>
  )
}

export async function getStaticProps() {
  const { db } = await connectToDB()
  const allSkills = await skills.getAllSkills(db)

  return {
    props: {
      skills: JSON.parse(JSON.stringify(allSkills)),
    },
  }
}
