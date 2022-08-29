import { usePetRepository } from '../db'

export const useAddFishes = () => {
  const { createPet, logPets } = usePetRepository()

  const execute = (): void => {
    createPet('Maria', { name: 'Cascudo', type: 'fish' })
    createPet('Maria', { name: 'Rei', type: 'fish' })
    createPet('Maria', { name: 'Pintado', type: 'fish' })

    console.log(
      'Maria comprou um aquário com três peixes, Cascudo, Rei e Pintado.'
    )
    logPets('Maria')
  }

  return { execute }
}
