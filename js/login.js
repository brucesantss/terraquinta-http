// Seleção do formulário e elementos
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtendo os valores dos inputs
    const email = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const feedback = document.getElementById('feedback');

    // Verificação de campos vazios
    if (!email || !password) {
        feedback.textContent = 'Por favor, preencha todos os campos!';
        feedback.classList.add('error');
        feedback.classList.remove('hidden');
        return;
    }

    try {
        // Simulação de usuários no localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Login bem-sucedido
            feedback.textContent = 'Login bem-sucedido!';
            feedback.classList.add('success');
            feedback.classList.remove('hidden');

            setTimeout(() => {
                window.location.href = 'home.html'; // Redirecionar para a página inicial
            }, 1500);
        } else {
            // Credenciais inválidas
            feedback.textContent = 'Email ou senha incorretos.';
            feedback.classList.add('error');
            feedback.classList.remove('hidden');
        }
    } catch (err) {
        // Erro ao acessar usuários
        console.error('Erro ao acessar usuários:', err);
        feedback.textContent = 'Ocorreu um erro. Tente novamente mais tarde.';
        feedback.classList.add('error');
        feedback.classList.remove('hidden');
    }
});
