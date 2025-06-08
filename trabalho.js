// Função pra gerar etiquetas de identificação em letras maiúsculas
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Função pra verificar se um animal de estimação pode ser adotado c/ base na idade e no tamanho
export function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === "M";
}

// Função pra calcular o consumo alimentar diário onde só peso é utilizado
export function calcularConsumoDeRacao(nome, idade, peso) {
  return Math.round(peso * 300);
}

// Função pra decidir o tipo de atividade c/ base no tamanho do animal de estimação
export function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: "brincar dentro de casa",
    medio: "passear no parque",
    grande: "correr em campo aberto",
  };
  return atividades[porte.toLowerCase()] || "atividade não definida";
}

// Função pra simular busca de dados
export async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pipoca");
    }, 100);
  });
}
