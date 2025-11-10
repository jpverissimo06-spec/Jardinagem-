// js/tema.js - versão corrigida e funcional
(function () {
  const LINK_ID = "link-tema";
  const STORAGE_KEY = "site_tema_v1"; // chave no localStorage

  // Função que aplica o tema (troca o CSS dinâmico)
  function applyTheme(tema) {
    const link = document.getElementById(LINK_ID);
    if (!link) {
      console.warn("⚠️ link-tema não encontrado no head");
      return;
    }

    // Garante que só existam dois valores possíveis
    tema = tema === "escuro" ? "escuro" : "claro";

    // Define qual CSS carregar
    link.href = tema === "escuro" ? "style-escuro.css" : "style-claro.css";
  }

  // Função global para alternar e salvar o tema
  window.alternarTema = function () {
    const atual = localStorage.getItem(STORAGE_KEY) || "claro";
    const proximo = atual === "escuro" ? "claro" : "escuro";

    applyTheme(proximo);
    localStorage.setItem(STORAGE_KEY, proximo);
  };

  // Ao carregar a página, aplica o tema salvo (ou claro por padrão)
  window.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem(STORAGE_KEY) || "claro";
    applyTheme(temaSalvo);
  });
})();
