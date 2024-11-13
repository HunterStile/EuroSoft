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