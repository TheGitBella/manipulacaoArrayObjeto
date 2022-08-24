import { useDb } from '../db'

export const addCountry = () => {
    const { getData } = useDb()

    const execute = (): void => {
    const data = getData()

    console.log(`\nSão realizados os registros de nacionalidade:\n`)

    data.slice(0,3).forEach((item) => {
    Object.assign(item, { country: "Brasil" })
    console.log(`O ${item.name} é do país ${item.country}`)
    })

    data.slice(3,11).forEach((item) => {
    Object.assign(item, { country: "EUA" })
    console.log(`O ${item.name} é do país ${item.country}`)
    })

    data.slice(-2,undefined).forEach((item) => {
    Object.assign(item, { country: "França" })
    console.log(`O ${item.name} é do país ${item.country}`)
    })
}
    return { execute }
}
