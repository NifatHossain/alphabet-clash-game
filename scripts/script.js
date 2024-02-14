document.getElementById('playBtn').addEventListener('click', function(){
    document.getElementById('homePage').classList.add('hidden');
    document.getElementById('play').classList.remove('hidden');
    let character= getChar();
    document.getElementById('target').innerText= character;
    let chara2= character.toLowerCase();
    document.getElementById(chara2).classList.add('bg-yellow-400');


})

function getChar(){
    let random= Math.round(Math.random()*25)+65;
    let char= String.fromCharCode(random);
    return char;
}
document.getElementById('target').innerText= getChar;




// for(let i=0; i<50; i++){
//     let random= Math.round(Math.random()*25)+65;
//     let char= String.fromCharCode(random);
//     console.log(char);
//      console.log(random)

// }



