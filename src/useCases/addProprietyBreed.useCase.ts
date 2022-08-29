import { usePetRepository } from '../db'

export const useAddBreed = () => {
    const { listAllPets } = usePetRepository()

    const execute = (): void => {
    const data = listAllPets()

    console.log(`\nTodas os pets tem suas raças registradas:\n`)
    data.forEach((item) => {
        Object.assign(item, { breed: "SRD" })      

    })

    console.log(data)
}
    return { execute }
}
