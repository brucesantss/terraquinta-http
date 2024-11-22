document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const feedback = document.getElementById('feedback');

    console.log('Iniciando processo de cadastro');
    console.log(`Usuário: ${username}, Email: ${email}`);

    if (!username || !email || !password || !confirmPassword) {
        feedback.textContent = 'Por favor, preencha todos os campos!';
        feedback.className = 'error';
        feedback.classList.remove('hidden');
        console.error('Erro: Campos obrigatórios não preenchidos.');
        return;
    }

    if (password !== confirmPassword) {
        feedback.textContent = 'As senhas não coincidem!';
        feedback.className = 'error';
        feedback.classList.remove('hidden');
        console.error('Erro: Senhas diferentes.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Usuários existentes:', users);

    if (users.find(user => user.email === email)) {
        feedback.textContent = 'Email já cadastrado!';
        feedback.className = 'error';
        feedback.classList.remove('hidden');
        console.error('Erro: Email já cadastrado.');
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Novo usuário adicionado:', { username, email });

    feedback.textContent = 'Usuário cadastrado com sucesso!';
    feedback.className = 'success';
    feedback.classList.remove('hidden');

    setTimeout(() => {
        window.location.href = 'http://127.0.0.1:5500/login.html';
    }, 1500);
});