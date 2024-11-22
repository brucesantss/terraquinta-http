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
        feedback.classList.add('error');
        feedback.classList.remove('hidden');
        console.error('Erro: Campos obrigatórios não preenchidos.');
        return;
    }

    if (password !== confirmPassword) {
        feedback.textContent = 'As senhas não coincidem!';
        feedback.classList.add('error');
        feedback.classList.remove('hidden');
        console.error('Erro: Senhas diferentes.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Usuários existentes:', users);

    if (users.find(user => user.email === email)) {
        feedback.textContent = 'Email já cadastrado!';
        feedback.classList.add('error');
        feedback.classList.remove('hidden');
        console.error('Erro: Email já cadastrado.');
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Novo usuário adicionado:', { username, email });

    feedback.textContent = 'Usuário cadastrado com sucesso!';
    feedback.classList.add('success');
    feedback.classList.remove('hidden');

<<<<<<< HEAD
    setTimeout(() => {
        window.location.href = 'login.html'; // Redirecionar para a página de login
    }, 1500);
=======
    document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const name = btn.dataset.name;

            cart = cart.filter((item) => item.name !== name);
            localStorage.setItem("cart", JSON.stringify(cart));
            
            window.location.reload();
        });
    });

    
});

document.querySelector('.checkout-btn').addEventListener('click', function () {
    // Redireciona para a página "pedidoRealizado.html"
    window.location.href = 'http://127.0.0.1:5500/pedidoRealizado.html';
>>>>>>> 3a6f2b243bb48f86ba147318d52b76d72b7b194d
});
