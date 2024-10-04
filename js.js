// Adiciona evento de submissão ao formulário
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const cpf = document.getElementById('cpf').value;
    const address = document.getElementById('address').value;
    const workplace = document.getElementById('workplace').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const country = document.getElementById('country').value;

    // Exibe as informações na nuvem
    const infoCloud = document.getElementById('infoCloud');
    infoCloud.innerHTML = `<strong>Informações Salvas:</strong><br>
                           Nome Completo: ${fullname}<br>
                           Nome de Usuário: ${username}<br>
                           CPF: ${cpf}<br>
                           Endereço: ${address}<br>
                           Local de Trabalho: ${workplace}<br>
                           Telefone: ${phone}<br>
                           Data de Nascimento: ${dob}<br>
                           Cidade: ${city}<br>
                           Estado: ${state}<br>
                           CEP: ${zip}<br>
                           País: ${country}`;

    // Tornar a nuvem visível e posicioná-la no topo
    infoCloud.classList.remove('hidden');
    infoCloud.classList.add('visible');
    infoCloud.style.top = '20px';
    infoCloud.style.right = '20px';

    // Limpa os campos do formulário
    this.reset();

    // Redireciona para a página de pagamento após 3 segundos
    setTimeout(() => {
        window.location.href = 'pagamento.html';
    }, 3000); // 3000 milissegundos = 3 segundos
    
     // Redireciona para a página de aviso após 3 segundos
});

document.getElementById('pagamentoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Limpa os campos do formulário
    this.reset();
    
     // Redireciona para a página de aviso após 3 segundos
    setTimeout(() => {
        window.location.href = 'aviso.html'; // Redireciona para a página de aviso
    }, 3000); // Ajuste o tempo em milissegundos conforme necessário
});