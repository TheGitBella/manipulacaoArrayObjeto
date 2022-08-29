import { usePetRepository } from '../db'
import { Pet } from '../types'

export const useUpdateThor = () => {
    const { findPet, updatePet } = usePetRepository()

    const execute = (): void => {
    const data = findPet("Thor") as Pet
    data.color = "Escuro acinzentado"
    updatePet(data)

    console.log(`\nThor é ${data.color}:\n`,
    data)
}
    return { execute }
}
