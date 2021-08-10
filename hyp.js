var base = document.querySelector('.base');
var height = document.querySelector('.height');
var btn = document.querySelector('.calculate');
var opt = document.querySelector('.output');

document.addEventListener('submit' , (e) => {

    e.preventDefault();

    let b = base.value;
    let h = height.value;

    let hyp = Math.sqrt((b*b) + (h*h)).toFixed(2);

    opt.innerText = "Hypotenuse = " + hyp + " cm";

    opt.style.display = "block";

});