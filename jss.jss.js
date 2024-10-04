// Script para validar o formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const cpf = document.getElementById('cpf').value;
    const address = document.getElementById('address').value;
    const workplace = document.getElementById('workplace').value;
    const shift = document.getElementById('shift').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const maritalStatus = document.getElementById('maritalStatus').value;
    const nationality = document.getElementById('nationality').value;
    const motherName = document.getElementById('motherName').value;
    const fatherName = document.getElementById('fatherName').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const country = document.getElementById('country').value;

    // Valida se todos os campos estão preenchidos
    if (fullname && username && password && cpf && address && workplace && shift && phone && dob && maritalStatus && nationality && motherName && fatherName && state && city && zip && country) {
        // Exibe uma mensagem de sucesso (pode ser substituído por uma ação real)
        alert('Formulário enviado com sucesso!');
        // Limpa os campos do formulário
        this.reset();
    } else {
        // Exibe uma mensagem de erro se algum campo estiver vazio
        alert('Por favor, preencha todos os campos.');
    }
});