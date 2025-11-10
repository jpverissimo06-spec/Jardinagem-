// js/tema.js

// Função para alternar o tema
function alternarTema() {
  const temaAtual = localStorage.getItem("tema") || "claro";
  const novoTema = temaAtual === "claro" ? "escuro" : "claro";

  // Troca o link do CSS
  const link = document.getElementById("link-tema");
  link.href = novoTema === "claro" ? "styles-claro.css" : "styles-escuro.css";

  // Salva a escolha
  localStorage.setItem("tema", novoTema);
}

// Ao carregar a página, aplica o tema salvo
window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema") || "claro";
  const link = document.getElementById("link-tema");
  link.href = temaSalvo === "claro" ? "styles-claro.css" : "styles-escuro.css";
});
