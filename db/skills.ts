import { Db } from 'mongodb'

// query helper functions for skills collection

export async function getAllSkills(db: Db) {
  const skills = db.collection('test').find()

  return skills
}
