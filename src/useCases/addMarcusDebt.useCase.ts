import { usePersonRepository } from '../db'
import { Person } from '../types'

export const useAddDebt = () => {
    const { updatePerson, findPerson } = usePersonRepository()

    const execute = (): void => {
    let data = findPerson("Marcus") as Person
    data.money = -2000
        updatePerson(data)

    console.log(
      `\nMarcus adquiriu uma dívida nova: ${data.money}\n`,
data
      )
}

    return { execute }
}
