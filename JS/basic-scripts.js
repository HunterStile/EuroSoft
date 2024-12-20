// Funzione per caricare il <head>
function loadHead() {
    return fetch('head.html')
        .then(response => response.text())
        .then(data => {
            // Inserisce il contenuto del file head.html nel tag <head> del documento
            document.querySelector('head').innerHTML = data;
            console.log('✅ Head caricato');
        })
        .catch(error => {
            console.error('❌ Errore nel caricamento del <head>:', error);
        });
}

// Funzione per caricare l'header
function loadHeader() {
    return fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data); // Inserisce l'header prima di tutto il corpo
            console.log('✅ Header caricato');
        })
        .catch(error => {
            console.error('❌ Errore nel caricamento dell\'header:', error);
        });
}

// Funzione per caricare la navbar
function loadNavbar() {
    return fetch('navbar.html')
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
    //loadHead(); da risolver..
    loadHeader()   
        .then(() => {
            loadNavbar().then(() => {
                // Inizializza gli event listener per il menu mobile solo dopo aver caricato la navbar
                const mobileMenuButton = document.querySelector('.mobile-menu-button');
                const nav = document.querySelector('.nav');

                if (mobileMenuButton && nav) { // Controlla se gli elementi esistono
                    mobileMenuButton.addEventListener('click', function() {
                        mobileMenuButton.classList.toggle('active');
                        nav.classList.toggle('active');
                    });

                    // Chiudi il menu quando si fa clic fuori
                    document.addEventListener('click', function(event) {
                        if (!nav.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                            nav.classList.remove('active');
                            mobileMenuButton.classList.remove('active');
                        }
                    });
                } else {
                    console.error("Navbar o mobile menu button non trovati");
                }
            });
        });
    loadFooter(); // Carica il footer
    
});
