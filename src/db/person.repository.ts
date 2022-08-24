import { useDb } from './hook'

import { Person } from '../types'

export const usePersonRepository = () => {
  const { getData, setData } = useDb()

  const findPerson = (personName: string): Person | undefined => {
    const data = getData()

    const found = data.find((item) => item.name === personName)

    return found
  }

  const updatePerson = (person: Person) => {
    const data = getData()

    const foundIndex = data.findIndex((item) => item.name === person.name)

    if (foundIndex > -1) {
      data.splice(foundIndex, 1, person)
      setData(data)
    }
  }

  return {
    findPerson,
    updatePerson,
  }
}
