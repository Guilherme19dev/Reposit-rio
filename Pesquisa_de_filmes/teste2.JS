const searchinput  = document.getElementById('search');

searchinput.addEventListener('input', (event) =>{
    const value = formatString(event.target.value);

   const items = document.querySelectorAll('.item');

   items.forEach(item => {

if(formatString(item.textContent).indexOf(value) !== -1){
   item.style.display ='flex';
} else {
    item.style.display ='none';
}
   })
   
});

function formatString(value){
    return value
    .toLowerCase()
    .trim();
}