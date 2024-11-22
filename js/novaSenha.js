document.getElementById('new-password-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = localStorage.getItem('emailForPasswordReset')?.trim().toLowerCase();
    const newPassword = document.getElementById('new-password').value.trim();
    const confirmPassword = document.getElementById('confirm-new-password').value.trim();

    const feedback = document.getElementById('feedback');
    let userFound = false; // Inicializa a variável

    // Função para exibir o feedback
    function showFeedback(message, type) {
        feedback.textContent = message; // Define a mensagem
        feedback.className = type; // Define a classe (error ou success)
        feedback.classList.remove('hidden'); // Remove a classe que oculta
    }

    if (!email) {
        showFeedback('Não foi possível encontrar o e-mail para redefinir a senha.', 'error');
        console.error(' E-mail não encontrado no localStorage!');
        return;
    }

    if (newPassword !== confirmPassword) {
        showFeedback('As senhas não coincidem!', 'error');
        console.log('As senhas não coincidem.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email.trim().toLowerCase() === email) {
            users[i].password = newPassword; // Atualiza a senha
            userFound = true; // Marca o usuário como encontrado
            console.log('Senha atualizada para o usuário:', users[i]);
            break; // Encerra o loop
        }
    }

    if (!userFound) {
        showFeedback('Erro: Este e-mail não está registrado.', 'error');
        console.error('Erro: E-mail não registrado.');
        return;
    }

    // Atualiza o localStorage com as novas informações
    localStorage.setItem('users', JSON.stringify(users));

    showFeedback('Senha atualizada com sucesso! Redirecionando...', 'success');

    // Redireciona o usuário após um curto período
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
});
