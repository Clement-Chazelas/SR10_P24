document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.w-dropdown-toggle');
    const dropdownList = document.querySelector('.w-dropdown-list');
    const dropdownChevron = document.querySelector('.dropdown-chevron');


    dropdownToggle.addEventListener('mouseenter', () => {
        dropdownList.classList.add('w--open');
        dropdownChevron.style.transform = 'rotate(180deg)';
    });

    dropdownToggle.addEventListener('mouseleave', () => {
        dropdownList.classList.remove('w--open');
        dropdownChevron.style.transform = 'rotate(0deg)';
    });

    // Empêcher la fermeture de la liste lors du clic sur un élément à l'intérieur
    dropdownList.addEventListener('click', (event) => {
        event.stopPropagation(); // Empêche la propagation de l'événement
    });

    // Maintenir la liste ouverte lorsque la souris est sur la liste elle-même
    dropdownList.addEventListener('mouseenter', () => {
        dropdownList.classList.add('w--open');
    });

    // Fermer la liste lorsque la souris quitte la liste
    dropdownList.addEventListener('mouseleave', () => {
        dropdownList.classList.remove('w--open');
    });
});

document.getElementById('boutonInscription').addEventListener('click', function() {
    document.querySelector('.signup-modal1_component').style.display = 'flex'; // Ou 'block', selon votre mise en page
});

document.getElementById('boutonConnexion').addEventListener('click', function() {
    document.querySelector('.signup-modal1_component_con').style.display = 'flex'; // Ou 'block', selon votre mise en page
});

document.querySelector('.signup-modal1_background-overlay').addEventListener('click', function(event) {
    // Vérifie si le clic a eu lieu sur l'overlay lui-même et non sur un enfant
    if (event.target === this) {
      // Ferme la popup
      document.querySelector('.signup-modal1_component').style.display = 'none';
    }
});

document.querySelector('.signup-modal1_background-overlay_con').addEventListener('click', function(event) {
    // Vérifie si le clic a eu lieu sur l'overlay lui-même et non sur un enfant
    if (event.target === this) {
      // Ferme la popup
      document.querySelector('.signup-modal1_component_con').style.display = 'none';
    }
});

document.querySelector('[data-w-id="3dc4fed2-8577-1c29-1dc2-c4778748ffa1"]').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien (navigation ou changement de l'URL)
    document.querySelector('.signup-modal1_component').style.display = 'none'; // Cache la popup
});

document.querySelector('[data-w-id="1"]').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien (navigation ou changement de l'URL)
    document.querySelector('.signup-modal1_component_con').style.display = 'none'; // Cache la popup
});
