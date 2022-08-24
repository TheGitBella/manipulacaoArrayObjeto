import { useDb } from '../db'

export const useConsoleOlds = (hasPastYears: number) => {
  const { getData } = useDb()

  const execute = (): void => {
    const data = getData()

    const today = new Date()
    const parsedToday: Date = new Date(today)
    parsedToday.setFullYear(today.getFullYear() + hasPastYears)

    console.log(`\nSe passou ${hasPastYears} anos\n`)
    data.forEach((item) => {
      const olds =
        parsedToday.getFullYear() - new Date(item.birthDate).getFullYear()

      console.log(`${item.name} tem ${olds} anos`)
    })
  }

  return { execute }
}
