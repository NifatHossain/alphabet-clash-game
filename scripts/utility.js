function addClassByIdname(id){
    document.getElementById(id).classList.add('hidden');
}
function removeClassByIdname(id){
    document.getElementById(id).classList.remove('hidden');
}

function addBgById(id){
    let chara2= id.toLowerCase();
    document.getElementById(chara2).classList.add('bg-yellow-400');
}

function removeBgById(id){
    let chara2= id.toLowerCase();
    document.getElementById(chara2).classList.remove('bg-yellow-400');
}

function getChar(){
    let random= Math.round(Math.random()*25)+65;
    let char= String.fromCharCode(random);
    return char;
}

function increaseScore(){
    let currentScore= parseInt(document.getElementById('score').innerText)
    currentScore=  currentScore+1;
    document.getElementById('score').innerText= currentScore;
    document.getElementById('finalScore').innerText= currentScore;

}
function decreaseLife(){
    let currentLife= parseInt(document.getElementById('life').innerText);
    currentLife= currentLife-1;
    document.getElementById('life').innerText= currentLife;

}
function resetLife(){
    document.getElementById('life').innerText= 5;
}
function resetScore(){
    document.getElementById('score').innerText= 0;
    document.getElementById('finalScore').innerText= 0;
}