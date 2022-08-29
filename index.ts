// db
import { useDb } from './src/db'

// useCases
import { useConsoleOlds, useAddNevinha, useAddFishes, useAddMoney, useAddCountry, useAddDebt, useAddBreed, useAddColor, useAddInheritance, useUpdateSpartacus, useUpdateCountry, useUpdateAlfredo, useUpdateNevinha, useUpdateMarcus, useUpdateThor, useUpdateEduardo } from './src/useCases'

const runApplication = () => {
  const { initialize } = useDb()

  initialize()

  // Antônio adotou uma nova gata chamada Nevinha.
  useAddNevinha().execute()

  // Maria comprou um aquário com três peixes, Cascudo, Rei e Pintado.
  useAddFishes().execute()

  //Qual a idade de cada pessoa agora?
  useConsoleOlds(0).execute()
  
  //Adicione a propriedade "money" (numérico) a todas as pessoas, com valor inicial igual a 0.
  useAddMoney().execute()

  //Adicione a propriedade "country" a todas as pessoas, as três primeiras pessoas moram no Brasil, as duas últimas na França, e o restante nos EUA.
  useAddCountry().execute()
  
  //Marcus possuí uma dívida de R$ 2.000,00
  useAddDebt().execute()
  
  //Adicione a propriedade "breed" (raça) a todos os pets, com valor inicial "SRD" (Sem raça definida).
  useAddBreed().execute()

  //Adicione a propriedade "color" a todos os pets, com valor inicial "PATTERN" (vamos usar este valor para específicar animais como 'malhados').
  useAddColor().execute()
  
  //Eduardo recebeu uma herança de R$ 1.000.000,00.
  useAddInheritance().execute()
  
  //Recentemente, Spartacus foi descoberto como um "Pastor Alemão".
  useUpdateSpartacus().execute()
  
  //Ana mudou-se para o Canadá.
  useUpdateCountry().execute()
  
  //Alfredo é um labrador.
  useUpdateAlfredo().execute()
  
  //Passou-se um ano, qual a idade de cada pessoa agora?
  useConsoleOlds(1).execute()
  
  //Nevinha é branca.
  useUpdateNevinha().execute()

  //Marcus quitou sua dívida de R$ 2.000,00 e adotou um canário chamado Loro.
  useUpdateMarcus().execute()
  
  //Thor possuí coloração escura e cinzenta.
  useUpdateThor().execute()

  //Eduardo mudou-se para seu novo apartamento em Portugal, e infelizmente precisou doar Spike para Maria.
  useUpdateEduardo().execute() //Corrigir

}

runApplication()



//Maryanna ganhou incríves R$ 5,00 em uma raspadinha.

//Viivam apostou online e perdeu R$ 500,00.

//Passou-se um ano, qual a idade de cada pessoa agora?

//Adicione a propriedade "cloth" (roupa) a cada pet, com o valor de um array de objetos do tipo {type: string, color: string}.

//Amora ganhou um boné roxo para realçar seu pelo.

//Antônio pegou R$ 2,00 emprestado para comprar uma galinha chocadeira e agora distribui ovo para a família toda. Antônio nomeou a galinha de Giserda.

//Rex ganhou um lenço vermelho.

//Thor ganhou uma camisa cinza e botas marrons para não passar frio nas montanhas.

//Maryanna ganhou R$ 20,00 em uma raspadinha.

//Viivam quitou sua dívida de R$ 500,00.

//Bolhas é um Kinguio laranja.

//Filho é uma calopcita.

//Peralta é um gato siamês.

//Giserda ganhou um brinco azul para suas penas.

//Eduardo torrou sua herança em Pastel de Nata e voltou para o Brasil e reencontrou Spike. Agradeceu a Maria com tudo que lhe restava, R$ 1.000,00, e foi viver com a natureza.

//Luna ganhou um chapéu roxo e sapatos pretos para sua fantasia do Haloween.

/* Passou se 12 anos.

1. Elabore um relatório de cada pessoa contendo sua idade atual, o país em que está agora, seu saldo no banco, quantidade de pets e elebore um sub-relatório para cada pet contendo sua raça, coloração, tipo, quantidade de roupa e elebore um sub-relatório para roupa contendo o tipo e a cor.

2. Filtre quantas pessoas possuem mais de R$ 0,00.

3. Filtre quantas pessoas possuem saldo negativo.

4. Elabore um relatório da quantidade total de cada pet por tipo.

5. Elabore um relatório da quantidade total de pessoas pet por país.

6. Qual o pet mais incomum? */
