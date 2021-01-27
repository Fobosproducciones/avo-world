// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
import allData from './data'

class Database {
  constructor() {}

  async getAll(): Promise<TProduct[]> {
    const asArray = Object.values(allData)

    return asArray
  }

  async getById(id: string): Promise<TProduct | null> {
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
      return null
    }

    const entry = allData[id]

    return entry
  }
}

// Let's also add a delay to make it a bit closer to reality

export default Database
