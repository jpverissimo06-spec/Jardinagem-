document.addEventListener("DOMContentLoaded", async () => {
  const tabela = document.getElementById("tabela-produtos");
  const corpoTabela = tabela.querySelector("tbody");

  try {
    const resposta = await fetch("dados.json");
    if (!resposta.ok) throw new Error("Erro ao carregar o arquivo JSON");

    const dados = await resposta.json();

    dados.forEach(planta => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td><img src="${planta.imagem}" alt="${planta.nome}"></td>
        <td>${planta.nome}</td>
        <td>${planta.categoria}</td>
        <td>${planta.preco}</td>
        <td>${planta.descricao}</td>
      `;
      corpoTabela.appendChild(linha);
    });

  } catch (erro) {
    console.error("Falha ao carregar dados:", erro);
  }
});
