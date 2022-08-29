import { usePetRepository } from '../db'
import { Pet } from '../types'

export const useUpdateNevinha = () => {
    const { findPet, updatePet } = usePetRepository()

    const execute = (): void => {
    const data = findPet("Nevinha") as Pet
    data.color = "Branca"
    updatePet(data)

    console.log(`\nNevinha é branca:\n`,
    data)
}
    return { execute }
}
