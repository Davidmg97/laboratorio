document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const projectModal = document.getElementById('projectModal');

    const closeModal = (modal) => {
        modal.style.display = 'none';
    }

    const openModal = (modal) => {
        modal.style.display = 'block';
    }

    window.openLoginModal = () => {
        openModal(loginModal);
    }

    window.closeLoginModal = () => {
        closeModal(loginModal);
    }

    window.closeProjectModal = () => {
        closeModal(projectModal);
    }

    window.login = function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                closeLoginModal();
                openModal(projectModal);
            } else {
                alert('Login failed');
            }
        })
        .catch(error => console.error('Error:', error));
    }

    window.registerProject = function(event) {
        event.preventDefault();

        const form = document.getElementById('project-form');
        const formData = new FormData(form);

        fetch('registrarproyectos.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Project registered successfully');
                closeProjectModal();
            } else {
                alert('Registration failed');
            }
        })
        .catch(error => console.error('Error:', error));
    }

    window.onclick = function(event) {
        if (event.target === loginModal) {
            closeLoginModal();
        } else if (event.target === projectModal) {
            closeProjectModal();
        }
    }
});







