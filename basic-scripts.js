// Funzione per caricare il navbar
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML += data;
            console.log('✅ Navbar caricata');
        })
        .catch(error => {
            console.error('❌ Errore nel caricamento della navbar:', error);
        });
}

// Funzione per caricare il footer
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
            console.log('✅ Footer caricato');
        })
        .catch(error => {
            console.error('❌ Errore nel caricamento del footer:', error);
        });
}

// Carica tutto quando il DOM è pronto
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
    loadFooter();
});

// Add this JavaScript to handle the mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('.nav');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenuButton.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            nav.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }
    });
});