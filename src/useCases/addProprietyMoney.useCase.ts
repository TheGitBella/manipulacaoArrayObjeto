import { useDb } from '../db'

export const useAddMoney = () => {
    const { getData } = useDb()

    const execute = (): void => {
    const data = getData()

    console.log(`\nTodas as pessoas tem seus registros financeiros iniciados:\n`)
    data.forEach((item) => {
        Object.assign(item, { money: 0 })
        
        console.log(`O ${item.name} possui ${item.money} reais`)
    })
}

    return { execute }
}
