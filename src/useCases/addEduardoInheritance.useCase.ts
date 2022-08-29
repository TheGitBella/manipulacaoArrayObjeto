import { usePersonRepository } from '../db'
import { Person } from '../types'

export const useAddInheritance = () => {
    const { updatePerson, findPerson } = usePersonRepository()

    const execute = (): void => {
    let data = findPerson("Eduardo") as Person
    data.money = 1000000
        updatePerson(data)

    console.log(
      `\nEduardo recebeu uma herança: ${data.money}\n`,
data
      )
}

    return { execute }
}
