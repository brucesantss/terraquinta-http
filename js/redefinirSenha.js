document.getElementById('reset-password-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Recupera o e-mail digitado
    const email = document.getElementById('reset-email').value.trim();
    const feedback = document.createElement('p'); // Cria o feedback
    feedback.classList.add('feedback');
    document.querySelector('.reset-panel').appendChild(feedback); // Adiciona o feedback no painel

    // Validação de e-mail vazio
    if (!email) {
        feedback.textContent = 'Por favor, insira o seu e-mail.';
        feedback.className = 'error';
        console.error('Erro: E-mail não fornecido.');
        return;
    }

    // Verifica se o e-mail existe no localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Usuários no localStorage:', users);

    const user = users.find(user => user.email === email);

    if (user) {
        feedback.textContent = 'E-mail encontrado! Você pode agora redefinir sua senha.';
        feedback.className = 'success';
        console.log('Usuário encontrado:', user);

        setTimeout(() => {
            localStorage.setItem('emailForPasswordReset', email);
            window.location.href = "novaSenha.html"; // Redireciona para a página de nova senha
        }, 1500);
    } else {
        feedback.textContent = 'E-mail não encontrado. Tente novamente.';
        feedback.className = 'error';
        console.error('Erro: E-mail não encontrado.');
    }
});
