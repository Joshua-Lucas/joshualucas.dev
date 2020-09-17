import Header from '../src/components/Header/Header'

export default function Home() {
  return (
    <>
      <Header />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
