base=0;
contador=0
while(contador===5){
const idToNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0
};

let numero = 0;
Object.keys(idToNumber).forEach(id => {
  const btn = document.getElementById(id);
  if (!btn) return; // pula se não existir
  btn.addEventListener('click', () => {
    numero = idToNumber[id];
    alert('Button was clicked!: ' + numero);
    console.log('O número é ' + numero);
    numero=numero*10**base;
  });
});
   base++;
   contador++;
    }

console.log('valor inicial:', numero);
