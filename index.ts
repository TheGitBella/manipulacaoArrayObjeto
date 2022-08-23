//importação do BD
const jsonData = require("./data/db.json");
//const jsonData2 = JSON.stringify(jsonData);
//const jsonData3 = JSON.parse(jsonData);

//types
interface Pet {
	id: number;
	name: string;
	type: string;
}
interface Person {
	id: number;
	name: string;
	birthDate: string;
	money?: number;
	pets: Pet[];
}
interface TypeObj {
	people: Person[];
}

const data: TypeObj = jsonData;

//testando BD
/* const maria = data.people.find((item) => item.name === "Maria");
const biscoito = maria?.pets.find((item) => item.name === "Biscoito");
console.log(biscoito); */

//new pet
const id = data.people.flatMap((item) => item.pets).length + 1;
const personName: String = "";
const newPet = {};
const createPet = (personName, newPet: Pet) => {
	data.people.find((item) => item.name === personName)?.pets.push(newPet);
	console.log(data.people.flatMap((item) => item.pets));
};

//Antônio adotou uma nova gata chamada Nevinha.
createPet("Antônio", { id: id, name: "Nevinha", type: "cat" });

//Maria comprou um aquário com dois peixes, Cascudo e Rei.
createPet("Maria", { id: id, name: "Cascudo", type: "fish" });
createPet("Maria", { id: id, name: "Rei", type: "fish" });

//Qual a idade de cada pessoa agora?
//const today = Date.now();
//const tYear = today.getFullYear();
//const tMonth = today.getMonth();
//const tDay = today.getDay();
//const age = data.people.map(
//	(item) => `${item.name} tem ${Date.parse(item.birthDate) / 31536000000}`
//);

/* const birthDate = data.people.map((item) =>
	new Date(item.birthDate).getFullYear()
	console.log(birthDate);
); */

//const bYear = data.people.map((item) => item.birthDate.getFullYear());
//const bMonth = birthDate.getMonth();
//const bDay = birthDate.getDay();
//console.log(birthDate.map((item) => (item - today) / 31536000));

//Adicione a propriedade "money" (numérico) a todas as pessoas, com valor inicial igual a 0.
/* const money = { money: 0 };
data.people.forEach((item) => {
	Object.assign(item, money);
});
console.log(data); */

//Adicione a propriedade "country" a todas as pessoas, as três primeiras pessoas moram no Brasil, as duas últimas na França, e o restante nos EUA.
/* const money = { money: 0 };
data.people.forEach((item) => {
	Object.assign(item, money);
});
console.log(data); */

//Marcus possuí uma dívida de R$ 2.000,00

//Adicione a propriedade "breed" (raça) a todos os pets, com valor inicial "SRD" (Sem raça definida).

//Adicione a propriedade "color" a todos os pets, com valor inicial "PATTERN" (vamos usar este valor para específicar animais como 'malhados').

//Eduardo recebeu uma herança de R$ 1.000.000,00.

//Recentemente, Spartacus foi descoberto como um "Pastor Alemão".

//Ana mudou-se para o Canadá.

//Alfredo é um labrador.

//Passou-se um ano, qual a idade de cada pessoa agora?

//Nevinha é branca.

//Marcus quitou sua dívida de R$ 2.000,00 e adotou um canário chamado Loro.

//Thor possuí coloração escura e cinzenta.

//Eduardo mudou-se para seu novo apartamento em Portugal, e infelizmente precisou doar Spike para Maria.

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
