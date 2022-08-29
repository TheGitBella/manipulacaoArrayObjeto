import { usePersonRepository } from '../db'
import { Person } from '../types'

export const useUpdateCountry = () => {
    const { updatePerson, findPerson } = usePersonRepository()

    const execute = (): void => {
    let data = findPerson("Ana") as Person
    data.country = "Canadá"
        updatePerson(data)

    console.log(
      `\nAna se mudou para outro país: ${data.country}\n`,
data
      )
}

    return { execute }
}
