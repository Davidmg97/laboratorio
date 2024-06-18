document.addEventListener("DOMContentLoaded", function() {
    function fetchProjects(codigo) {
        fetch(`obtenerproyectos.php?codigo=${codigo}`)
            .then(response => response.json())
            .then(data => {
                const projectList = document.getElementById('project-list');
                projectList.innerHTML = '';
                data.forEach(project => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${project.autor_es} | ${project.fecha} | ${project.titulo}`;
                    projectList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching projects:', error));
    }

    fetchProjects('MIAU2024');
});

document.addEventListener("DOMContentLoaded", function() {
    function fetchProjects(codigo) {
        fetch(`obtenerproyectos.php?codigo=${codigo}`)
            .then(response => response.json())
            .then(data => {
                const projectList = document.getElementById('project-list1');
                projectList.innerHTML = ''; 
                data.forEach(project => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${project.autor_es} | ${project.fecha} | ${project.titulo}`;
                    projectList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching projects:', error));
    }

    fetchProjects('FAD2');
});
