import { usePetRepository } from '../db'
import { Pet } from '../types'

export const useUpdateSpartacus = () => {
    const { findPet, updatePet } = usePetRepository()

    const execute = (): void => {
    const data = findPet("Spartacus") as Pet
    data.breed = "Pastor Alemão"
    updatePet(data)

    console.log(`\nSpartacus é um Pastor Alemão:\n`,
    data)
}
    return { execute }
}
