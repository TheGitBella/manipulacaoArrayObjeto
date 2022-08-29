import { usePetRepository } from '../db'
import { Pet } from '../types'

export const useUpdateAlfredo = () => {
    const { findPet, updatePet } = usePetRepository()

    const execute = (): void => {
    const data = findPet("Alfredo") as Pet
    data.breed = "Labrador"
    updatePet(data)

    console.log(`\nAlfredo é um Labrador:\n`,
    data)
}
    return { execute }
}
