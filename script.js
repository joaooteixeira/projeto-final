// Função para validar o formulário e exibir a mensagem de confirmação
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Coletando os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const tipoSite = document.getElementById('tipoSite').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (nome === '' || email === '' || telefone === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Se todos os campos estão preenchidos, exibimos uma mensagem de sucesso
    document.getElementById('message').style.display = 'block';
    
    // Limpar o formulário
    document.getElementById('contactForm').reset();
});