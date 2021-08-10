var angles = document.querySelectorAll('.input-angles');

var output = document.querySelector('.angle-output');

console.log(angles);

document.addEventListener('submit' , handler );

function handler(e)
{
    e.preventDefault();

    let sum = 0 ;

    for(var i = 0 ; i<angles.length ; i++)
       sum+=Number(angles[i].value);

    if(sum == 180)
       output.innerText = "Hurrah ! These angles can form a triangle";
    else 
       output.innerText = "Oops ! These angles cannot form a triangle";

    output.style.display = 'block';
}