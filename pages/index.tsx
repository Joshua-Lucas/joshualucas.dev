import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
