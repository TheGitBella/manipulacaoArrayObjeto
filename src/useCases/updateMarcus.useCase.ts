import { usePersonRepository, usePetRepository } from '../db'
import { Person } from '../types'

export const useUpdateMarcus = () => {
    const { updatePerson, findPerson } = usePersonRepository()
    const { createPet } = usePetRepository()

    const execute = (): void => {
    let data = findPerson("Marcus") as Person
    data.money = 0
        updatePerson(data)
    createPet('Marcus', { name: 'Loro', type: 'canário' })

    console.log(
      `\nMarcus quitou sua dívida e adotou um nov pet:\n`,
data
      )
}

    return { execute }
}
