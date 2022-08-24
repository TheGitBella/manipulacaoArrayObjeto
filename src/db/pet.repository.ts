import { useDb } from './hook'

import { Pet } from '../types'

import { usePersonRepository } from './person.repository'

export const usePetRepository = () => {
  const { getData } = useDb()
  const { findPerson, updatePerson } = usePersonRepository()

  const findPet = (petName: string): Pet | undefined => {
    const data = getData()

    const parsedData = data.flatMap((item) => item.pets)

    const found = parsedData.find((item) => item.name === petName)

    return found
  }

  const listPetsByPerson = (personName: string): Pet[] => {
    const person = findPerson(personName)

    if (person) {
      return person.pets
    }

    return []
  }

  const listAllPets = (): Pet[] => {
    const data = getData()

    const pets = data.flatMap((item) => item.pets)

    return pets
  }

  const createPet = (personName: string, petData: Omit<Pet, 'id'>) => {
    const person = findPerson(personName)

    if (person) {
      const newId = listAllPets().length + 1

      const newPet: Pet = {
        ...petData,
        id: newId,
      }

      person.pets.push(newPet)

      updatePerson(person)
    }
  }

  const logPets = (personName: string) => {
    const person = findPerson(personName)

    if (person) {
      console.log(
        `${person.name} possui ${person.pets.length} pets:`,
        person.pets,
        '\n'
      )
    }
  }

  return {
    findPet,
    createPet,
    listPetsByPerson,
    listAllPets,
    logPets,
  }
}
