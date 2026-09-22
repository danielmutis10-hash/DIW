document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');

    menuBtn.addEventListener('click', (e) => {
        // Evita que el clic se propague a otros elementos
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

    //Cerrar el sidebar si el usuario hace clic en cualquier parte de la pantalla
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && e.target !== menuBtn) {
            sidebar.classList.remove('active');
        }
    });
});