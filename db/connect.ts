import { MongoClient} from 'mongodb'




global.mongo = global.mongo || {}

export async function connectToDB() {
  if(!global.mongo) {
    const client = new MongoClient(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000,
    })
    
    global.mongo.client = client

    console.log('connecting to DB')
    await global.mongo.client.connect()
    console.log('conneted to DB')


  }
  const db = global.mongo.client.db(process.env.DATABASE_NAME)
  return {db, dbClient: global.mongo.client}
}



