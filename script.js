let bgColor = document.querySelector('main');
let btnClick = document.querySelector('#click');
let span = document.querySelector('span');

let setBgColor = () => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  bgColor.style.backgroundColor = "#" + randomColor;
  span.innerHTML = "#" + randomColor;
  span.style.color = "#" + randomColor;
}

btnClick.addEventListener('click', () => {
  setBgColor();
})

