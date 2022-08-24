import { useDb } from '../db'

export const useAddDebt = () => {
    const { getData, setData } = useDb()

    const execute = (): void => {

    console.log(`\nMarcus adquiriu uma dívida nova:\n`)
}
    return { execute }
}