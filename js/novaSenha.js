document.getElementById('new-password-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = localStorage.getItem('emailForPasswordReset')?.trim().toLowerCase();
    console.log('E-mail recuperado do localStorage:', email); 

    const newPassword = document.getElementById('new-password').value.trim();
    const confirmPassword = document.getElementById('confirm-new-password').value.trim();

    const feedback = document.getElementById('feedback');

    if (!email) {
        feedback.textContent = 'Erro: Não foi possível encontrar o e-mail para redefinir a senha.';
        feedback.style.color = 'red';
        console.error('Erro: E-mail não encontrado no localStorage!');
        return;
    }

    if (newPassword !== confirmPassword) {
        feedback.textContent = 'As senhas não coincidem!';
        feedback.style.color = 'red';
        console.log('Erro: As senhas não coincidem.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Usuários no localStorage:', users); 

    const user = users.find(user => user.email.trim().toLowerCase() === email);

    console.log('Usuário encontrado:', user);

    if (!user) {
        feedback.textContent = 'Este email não está registrado.';
        feedback.style.color = 'red';
        console.log('Erro: E-mail não registrado.');
        return;
    }

    user.password = newPassword;

    localStorage.setItem('users', JSON.stringify(users));

    feedback.textContent = 'Senha atualizada com sucesso!';
    feedback.style.color = 'green';

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
});
