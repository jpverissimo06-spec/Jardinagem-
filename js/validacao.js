// validacao.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const emailInput = document.getElementById("email");
  const cpfInput = document.getElementById("cpf");

  form.addEventListener("submit", function (event) {
    const email = emailInput.value.trim();
    const cpf = cpfInput.value.trim();

    // Expressões regulares para validar
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    // Validação de e-mail
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido (ex: joao.silva@net.com)");
      emailInput.focus();
      event.preventDefault();
      return;
    }

    // Validação de CPF
    if (!cpfRegex.test(cpf)) {
      alert("Por favor, insira um CPF válido no formato 999.999.999-99");
      cpfInput.focus();
      event.preventDefault();
      return;
    }

    alert("Formulário enviado com sucesso!");
  });
});
