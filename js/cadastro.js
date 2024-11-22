document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const feedback = document.getElementById('feedback');

    console.log('Iniciando processo de cadastro');
    console.log(`Usuário: ${username}, Email: ${email}`);

    // Verificação de campos obrigatórios
    if (!username || !email || !password || !confirmPassword) {
        feedback.textContent = 'Por favor, preencha todos os campos!';
        feedback.className = 'error';
        feedback.classList.remove('hidden');
        console.error('Erro: Campos obrigatórios não preenchidos.');
        return;
    }

    // Verificação de correspondência de senhas
    if (password !== confirmPassword) {
        feedback.textContent = 'As senhas não coincidem!';
        feedback.className = 'error';
        feedback.classList.remove('hidden');
        console.error('Erro: Senhas diferentes.');
        return;
    }

    // Verificar se o email já está cadastrado
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Usuários existentes:', users);

    if (users.find(user => user.email === email)) {
        feedback.textContent = 'Email já cadastrado!';
        feedback.className = 'error';
        feedback.classList.remove('hidden');
        console.error('Erro: Email já cadastrado.');
        return;
    }

    // Adicionando o novo usuário
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));  // Salvando no localStorage
    console.log('Novo usuário adicionado:', { username, email });

    // Feedback de sucesso
    feedback.textContent = 'Usuário cadastrado com sucesso!';
    feedback.className = 'success';
    feedback.classList.remove('hidden');

    // Redirecionar para o login após 1,5 segundos
    setTimeout(() => {
        window.location.href = 'login.html';  // Redireciona para a página de login
    }, 1500);
});
