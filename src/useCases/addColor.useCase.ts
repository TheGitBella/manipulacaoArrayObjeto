import { usePetRepository } from '../db'

export const useAddColor = () => {
    const { listAllPets } = usePetRepository()

    const execute = (): void => {
    const data = listAllPets()

    console.log(`\nTodas os pets tem suas cores registradas:\n`)
    data.forEach((item) => {
        Object.assign(item, { color: "PATTERN" })      

    })

    console.log(data)
}
    return { execute }
}
