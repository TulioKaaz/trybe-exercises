// O fatorial é a multiplicação de um número natural pelos seus antecessores,
// exceto o zero. crie um algoritmo que imprima na tela o fatorial de 10.
console.log("Ex1:");
factorial(10);

function factorial(num) {
	let factorial = num;
	for (let i = num - 1; i > 0; i--){
		factorial *= i;
	}
	console.log(num + "! = " + factorial)
}

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz
// de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para
// “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para
// verificar se seu algoritmo está funcionando corretamente.
console.log("\nEx2:");
revertWorld('trybe');
revertWorld('mamaco');

function revertWorld(str) {
	let word = str;
	let revertedWorld = '';

	for(let i = word.length -1; i >= 0; i--)
		revertedWorld = revertedWorld + word[i];
	console.log(revertedWorld);
	console.log("---")
}

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne
// a maior palavra de um array e outro que retorne a menor. Considere o número de
// caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
largeWorld(array);
smallerWorld(array);

function worldCounter(str) {
	let counter = 0;
	for (i = 0; str[i] != undefined; i++){
		counter = i;
	}
	return counter;
}


