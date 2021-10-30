// Função para calcular a soma entre dois números
function adicionar(a,b){
return a + b;
}


//Função para calcular a subtração entre dois números
function subtracao(c,d){
    return c - d;
}

//Função para calcular a multiplicação entre dois números
function multiplicacao(e,f){
    return e * f;
}


//Função para calcular a divisão entre dois números
function divisao(g,h){
    return g/h;
}

//Função para gerar o quadrado de um número
function quadradoDoNumero(i){
    multiplicacao(i,i)
    return multiplicacao(i,i)
}

//Função para calcular a média de três números
function mediaDeTresNumeros(j,k,l){
    let soma = adicionar(j,k)
    adicionar(soma,l)
    soma = adicionar(soma,l)
    divisao(soma,3)
    return divisao(soma,3)
}

//Função para calcular porcentagem
function calculaPorcentagem(m,n){
    let total = divisao(m,100)
    multiplicacao(total,n)
    return multiplicacao(total,n)
}

//Função para gerar porcentagem
function geradorDePorcentagem(o,p){
    let total1 = divisao(p,100)
    divisao(o,total1)
    return divisao(o,total1)
}

console.log("----------Teste de Operações / Calculadora----------");
console.log("Esta função calcula a soma de dois números onde 3 + 5 = " + adicionar(3,5));
console.log("Esta função calcula a subtração de dois números onde 10 - 7 = " + subtracao(10,7));
console.log("Esta função calcula a multiplicação de dois números onde 3 x 5 = " + multiplicacao(3,5));
console.log("Esta função calcula a divisão de dois números onde 10 ÷ 5 = " + divisao(10,5));
console.log(divisao(5,0));
console.log("Esta função calcula o quadrado de um número onde 3² = " + quadradoDoNumero(3));
console.log("Esta função calcula a média entre três números onde a média entre 2, 18 e 10 é = " + mediaDeTresNumeros(2,18,10));
console.log("Esta função calcula o valor da porcentagem de um número onde 15% de 300 é = " + calculaPorcentagem(300,15));
console.log("Esta função calcula somente a porcentagem de um número onde 25 =  " + geradorDePorcentagem(25,200) + "% de 200");