let city = document.querySelectorAll('li');
let messageDiv = document.querySelector('.message');
let selectTemp = document.querySelector('select');
let gradosN = document.querySelectorAll('.gradoN');

function displayCity(event) {
    alert("Loading weather report for: " + event.target.textContent);
}

function removePolicy(event) {
    let elemento = event.target.closest('.message');
    elemento.remove();
}

function calcTemp(event) {
    let newValor = 0;
    if (event.target.value === 'F') {
        for (let i = 0; i < gradosN.length; i++) {
            newValor = 0;
            newValor = Math.round(parseInt(gradosN[i].firstChild.textContent) * (9 / 5) + 32);
            gradosN[i].innerHTML = ` ${newValor}`;
        }
    } else {
        for (let i = 0; i < gradosN.length; i++) {
            newValor = 0;
            newValor = Math.round(parseInt((gradosN[i].firstChild.textContent) - 32) * (5 / 9));
            gradosN[i].innerHTML = ` ${newValor}`;
        }
    }
}

for (let i = 0; i < city.length; i++) {
    city[i].addEventListener('click', displayCity);
}

messageDiv.addEventListener('click', removePolicy);
selectTemp.addEventListener('change', calcTemp);