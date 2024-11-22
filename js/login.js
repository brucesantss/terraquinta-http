document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const feedback = document.getElementById('feedback');

    if (!email || !password) {
        feedback.textContent = 'Por favor, preencha todos os campos!';
        feedback.classList.add('error');
        feedback.classList.remove('hidden');
        return;
    }

    try {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            feedback.textContent = 'Login bem-sucedido!';
            feedback.classList.add('success');
            feedback.classList.remove('hidden');

            setTimeout(() => {
                window.location.href = 'home.html'; 
            }, 1500);
        } else {
            feedback.textContent = 'Email ou senha incorretos.';
            feedback.classList.add('error');
            feedback.classList.remove('hidden');
        }
    } catch (err) {
        console.error('Erro ao acessar usuários:', err);
        feedback.textContent = 'Ocorreu um erro. Tente novamente mais tarde.';
        feedback.classList.add('error');
        feedback.classList.remove('hidden');
    }
});