import './style.css';

const acesa = document.getElementById('acesa') as HTMLElement;
const apagada = document.getElementById('apagada') as HTMLElement;
const quebrada = document.getElementById('quebrada') as HTMLElement;
const button = document.getElementById('button-quebrou') as HTMLButtonElement;

// Inicialmente
acesa.style.display = 'none';
quebrada.style.display = 'none';
button.style.display = 'none';
let soma: number = 0;

acesa.addEventListener('click', () => {
  apagada.style.display = 'block';
  quebrada.style.display = 'none';
  acesa.style.display = 'none';
});

apagada.addEventListener('click', () => {
  apagada.style.display = 'none';
  quebrada.style.display = 'none';
  acesa.style.display = 'block';
  soma++;
  
  if (soma === 10) {
    quebrada.style.display = 'block';
    acesa.style.display = 'none';
    button.style.display = 'block';

    setTimeout(() => {
      alert('Você quebrou a lâmpada!');
    }, 0); 
  }
});

button.addEventListener('click', () => {
  soma = 0;
  apagada.style.display = 'none';
  quebrada.style.display = 'none';
  acesa.style.display = 'block';
  button.style.display = 'none';
  
  setTimeout(() => {
    alert('Lâmpada consertada!');
  }, 0); 
});
