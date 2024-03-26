'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const bntShowModal = document.querySelectorAll('.show-modal');
const bntCloseModal = document.querySelector('.close-modal');

//Fonction Ouverture et fermeture

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Créer une boucle pour appeler le texte des : showModal
for (let i = 0; i < bntShowModal.length; i++)
  bntShowModal[i].addEventListener('click', openModal);

bntCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
