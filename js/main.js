const button25 = document.getElementById('button25');
const button30 = document.getElementById('button30');
const button55 = document.getElementById('button55');
const chosenPizzaSize = document.getElementById('chosenPizzaSize');


button25.addEventListener('click', function() {
    const chosenSize = '25 cm Pizza';
    chosenPizzaSize.textContent = '';
    chosenPizzaSize.textContent = chosenSize;
});

button30.addEventListener('click', function() {
    const chosenSize = '30 cm Pizza';
    chosenPizzaSize.textContent = '';
    chosenPizzaSize.textContent = chosenSize;
});

button55.addEventListener('click', function() {
    const chosenSize = '55 cm Pizza';
    chosenPizzaSize.textContent = '';
    chosenPizzaSize.textContent = chosenSize;
});


const pizzaSelect = document.getElementById('pizzaSelect');
const chosenPizzaBread = document.getElementById('chosenPizzaBread');

pizzaSelect.addEventListener('change', function() {
    const chosenSize = pizzaSelect.options[pizzaSelect.selectedIndex].text;
    chosenPizzaBread.textContent = chosenSize;
});

window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.code === 'KeyU') {
        event.preventDefault();
        alert('YOU CANNOT COPY!');
    }
});
document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("DO NOT COPY!!!");
});
window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyI') {
        event.preventDefault(); 
        alert('Do not copy !');
    }
});