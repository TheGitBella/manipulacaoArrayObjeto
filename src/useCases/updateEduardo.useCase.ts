import { usePersonRepository, usePetRepository } from '../db'
import { Person, Pet } from '../types'

export const useUpdateEduardo = () => {
    const { updatePerson, findPerson } = usePersonRepository()
    const { findPet, deletePet } = usePetRepository()

    const execute = (): void => {
    let data = findPerson("Eduardo") as Person
    const dataPet = findPet("Spike") as Pet

    data.country = "Portugal"
        updatePerson(data)

    deletePet(dataPet)

    console.log(
      `\nEduardo mudou-se para seu novo apartamento em Portugal, e infelizmente precisou doar Spike para Maria:\n`,
data
      )
}

    return { execute }
}
