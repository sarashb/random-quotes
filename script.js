let quotes=[
    'The secret of life is to love who you are.',
    'Look for opportunities in every change in your life.',
    'Persist while other are quitting.',
    'Grow 1% per day.',
    'A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)',
    'The cheapest, fastest, and most reliable components are those that aren’t there. (Gordon Bell)',
    'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization. (Gerald Weinberg)'
];

let btn=document.querySelector('.btn');
btn.addEventListener('click', displayQuote);

function displayQuote(){
    //irá gerar um quote aleatório
    let index=Math.floor(Math.random()*quotes.length);


    //mostrar o quote do index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="icons/favicon.png">
    <p>${quotes[index]}</p>
    <img src="icons/favicon.png">
    </div>
    `;
    div.innerHTML=quote;
    

}