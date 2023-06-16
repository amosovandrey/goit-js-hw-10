import { fetchBreeds } from './cat-api';

const selectEL = document.querySelector('.breed-select');
console.dir(selectEL);
selectEL.addEventListener('click', fetchBreeds);
function addOption() {
    const optionEl 
}