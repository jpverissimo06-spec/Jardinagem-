// carrega_dados.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("js/dados.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar dados: " + response.status);
      }
      return response.json();
    })
    .then(dados => {
      const tabela = document.querySelector("table tbody");
      tabela.innerHTML = "";

      dados.forEach(planta => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
          <td><img src="${planta.imagem}" alt="${planta.nome}" width="100"></td>
          <td>${planta.nome}</td>
          <td>${planta.categoria}</td>
          <td>${planta.preco}</td>
          <td>${planta.descricao}</td>
        `;
        tabela.appendChild(linha);
      });
    })
    .catch(error => console.error("❌ Erro ao carregar dados:", error));
});
