import { usePetRepository } from '../db'

export const useAddNevinha = () => {
  const { createPet, logPets } = usePetRepository()

  const execute = (): void => {
    createPet('Antônio', { name: 'Nevinha', type: 'cat' })

    console.log('Antônio adotou uma nova gata chamada Nevinha.')
    logPets('Antônio')
  }

  return { execute }
}
