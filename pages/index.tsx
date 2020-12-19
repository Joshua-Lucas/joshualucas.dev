import Header from '../src/components/Header/Header'
import Main from '../src/components/Main/Main'
import {connectToDatabase} from './api/db/connect'

export default function Home({isConnected}) {
  return (
    <>
      <Header />
      <Main />
      {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
            for instructions.
          </h2>
        )}
    </>
  )
}

export async function getServerSideProps() {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}
