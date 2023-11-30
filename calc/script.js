// Função para realizar operações com dois valores e um operador
function calcular(valor1, valor2, operador) {
  let resultado;
  let sobra;

  switch (operador) {
    case '+':
      resultado = valor1 + valor2;
      break;
    case '-':
      resultado = valor1 - valor2;
      break;
    case '*':
      resultado = valor1 * valor2;
      break;
    case '/':
      if (valor2 !== 0) {
        resultado = Math.floor(valor1 / valor2);
        sobra = valor1 % valor2;
      } else {
        return 'Erro: Divisão por zero!';
      }
      break;
    default:
      return 'Operador inválido';
  }

  if (sobra !== undefined) {
    return `Resultado: ${resultado}, Sobra: ${sobra}`;
  } else {
    return `Resultado: ${resultado}`;
  }
}

// Loop para permitir que o usuário faça várias operações
let continuar = true;

while (continuar) {
  const valor1 = parseFloat(prompt('Digite o primeiro valor:'));
  const valor2 = parseFloat(prompt('Digite o segundo valor:'));
  const operador = prompt('Digite o operador (+, -, *, /):');

  const resultado = calcular(valor1, valor2, operador);
  console.log(resultado);

  const resposta = prompt('Deseja realizar outra operação? (S/N)').toUpperCase();
  continuar = resposta === 'S';
}
