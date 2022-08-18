// Seleccion de elementos dl DOM

let mainTitle = document.getElementById('main-title');
console.log(mainTitle);

let buttons = document.getElementsByTagName('button');
console.log(buttons);

let instructionsParagraph = document.getElementsByClassName('instructions');
console.log(instructionsParagraph);

let dinamicLink = document.querySelector('.dinamic-link');
console.log(dinamicLink);

let jumboItems = document.querySelectorAll('.jumbo');
console.log(jumboItems);


// Manipulacion de elementos DOM

mainTitle.innerHTML = 'Titulo cambiado';

buttons[1].disabled = true;

instructionsParagraph[0].style.color = 'crimson'

dinamicLink.setAttribute('href', 'http://google.com');

let options = ['Windows', 'MacOs', 'Linux'];

for ( i = 0 ; i < options.length; i++){
    jumboItems[i].innerHTML = options[i]
    ;
}


// Creacion de elementos en el DOM

let item = document.createElement('li');

item.innerHTML = 'Android';

let jumboList = document.querySelector('.jumbo');

jumboList.appendChild(item);

jumboList.removeChild(jumboItems[1])

let items2 = document.createElement('li');

item2.innerHTML = 'IOS';

jumboList.replaceChild(item2, jumboItems(0));


