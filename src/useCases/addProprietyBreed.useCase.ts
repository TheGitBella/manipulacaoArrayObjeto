import { useDb } from '../db'

export const useAddBreed = () => {
    const { getData } = useDb()

    const execute = (): void => {
    const data = getData()

    console.log(`\nTodos os pets tem sua raça cadastrada como SRD:\n`)
    data.forEach((item) => {
        Object.assign(item, { breed: "SRD" })
        
        console.log(`O ${item.name} é da raça ${item.breed}`)
    })
}

    return { execute }
}