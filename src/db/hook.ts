import { JsonDbType, Person } from '../types'

const jsonData = require('./db.json')

let data: Person[]

export const useDb = () => {
  const initialize = () => {
    data = (jsonData as JsonDbType).people
  }

  const getData = (): Person[] => data

  const setData = (evt: Person[]) => {
    data = evt
  }

  return {
    getData,
    setData,
    initialize,
  }
}
