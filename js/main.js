//state
let total;

/*----- cached element references -----*/
let input = document.querySelector('#num');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let totalMsg = document.querySelector('#total')

/*----- event listeners -----*/
plus.addEventListener('click', handleClickPlus);
minus.addEventListener('click', handleClickMinus);

/*----- functions -----*/
init();
// function add (num1, num2)


function handleClickPlus(e) {
  total += parseInt(input.value);

  render();
}

function handleClickMinus(e) {
  total -= parseInt(input.value);

  render();
}

function renderTotal () {
  if(total >= 0) {
    totalMsg.innerHTML = `<h1 id="total">${total}</h1>`
  } else {
    totalMsg.innerHTML = `<h1 class="red" id="total">${total}</h1>`
  }
}

function render() {
  renderTotal();
}

function init() {
total = 0;

render();
}

