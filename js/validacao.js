export function validar(input){
  const tipoDeInput = input.dataset.tipo;

  if(validadores[tipoDeInput]){
    validadores[tipoDeInput](input);
  }
}

const validadores = {
  dataNascimento:input => validarDataNascimento(input)
}

function validarDataNascimento(input){
  const dataRecebida = new Date(input.value);
  let mensagem = ``;
  
  if(!eMaiorque18(dataRecebida)){
    mensagem = `Você deve ser maior que 18 para se cadastrar`;
  }

  input.setCustomValidity(mensagem);
}

function eMaiorque18(data){
  const dataAtual = new Date();
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  return dataMais18 <= dataAtual;
}