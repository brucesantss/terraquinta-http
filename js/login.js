// Login de Usuário
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const feedback = document.getElementById('feedback');

    console.log('Iniciando processo de login');
    console.log(`Email: ${email}`);

    if (!email || !password) {
        feedback.textContent = 'Por favor, preencha todos os campos!';
        feedback.className = 'error';
        feedback.classList.remove('hidden');
        console.error('Erro: Campos obrigatórios não preenchidos.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Usuários registrados:', users);

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        feedback.textContent = 'Login bem-sucedido!';
        feedback.className = 'success';
        feedback.classList.remove('hidden');
        console.log('Usuário autenticado:', user);

        setTimeout(() => {
            window.location.href = 'http://127.0.0.1:5500/index.html';
        }, 1500);
    } else {
        feedback.textContent = 'Email ou senha incorretos.';
        feedback.className = 'error';
        feedback.classList.remove('hidden');
        console.error('Erro: Credenciais inválidas.');
    }
});
