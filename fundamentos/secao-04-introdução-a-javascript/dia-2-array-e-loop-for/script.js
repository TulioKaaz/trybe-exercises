let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// ex1: Percorra o array imprimindo todos os valores nele contidos com a função
// console.log();
console.log("ex1:");
for (number of numbers)
	console.log(number);

// ex2: Some todos os valores contidos no array e imprima o resultado;
console.log("\nex2:")
let sum = 0;
for (number of numbers)
	sum += number;
console.log("Soma: " + sum);

// ex3: Calcule e imprima a média aritmética dos valores contidos no array;
console.log("\nex3:");
let average = sum / numbers.length;
console.log("Média: " + average);

// ex4: Com base no código que acabou de gerar, faça com que, caso o valor final
// seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima
// a mensagem: “valor menor ou igual a 20”;
console.log("\nex4:");
if (average <= 20)
	console.log("Valor menor ou igual a 20");
else
	console.log("Valor maior que 20");

// ex5: Utilizando for, descubra qual o maior valor contido no array e imprima-o;
console.log("\nex5:");
let large = numbers[0];
for (let i = 1; i <= numbers.length; i++){
	if(large < numbers[i])
		large = numbers[i];
}
console.log("Maior valor da lista: " + large);

// ex6: Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
console.log("\nex6:");
let odd = 0;
for (number of numbers){
	if (number % 2 != 0)
		odd++;
}
if (odd > 0)
	console.log("Tem " + odd + " números ímpares");
else
	console.log("nenhum valor ímpar encontrado");

// ex7: Utilizando for, descubra qual o menor valor contido no array e imprima-o;
console.log("\nex7:");
let smaller = numbers[0];
for (let i = 1; i <= numbers.length; i++){
	if(smaller > numbers[i])
		smaller = numbers[i];
}
console.log("Menor valor da lista: " + smaller);

// ex8: Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
console.log("\nex8:");
let arr = [];
for (let i = 1; i <= 25; i++){
	arr.push(i);
}
console.log(arr);

// ex9: Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
console.log("\nex9:");
for (number of arr)
	console.log(number / 2);
