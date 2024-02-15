document.getElementById('playBtn').addEventListener('click',startPlay); 


function startPlay(){
    resetLife();
    resetScore();
    addClassByIdname('homePage')
    removeClassByIdname('play')
    addClassByIdname('scorePage');
    let character= getChar();
    document.getElementById('target').innerText= character;
    addBgById(character);
    
}
document.addEventListener('keyup', keyPressed);
function keyPressed(event){
    let character= document.getElementById('target').innerText;
    let pressedAlpabet = event.key;
    // console.log(event.key);
    if(pressedAlpabet === character.toLowerCase()){
        increaseScore();
        removeBgById(character)
        continuePlay();
    }
    else if(pressedAlpabet === 'Escape'){
        removeBgById(character);
        removeClassByIdname('scorePage');
        addClassByIdname('play');
    }
    else{
        decreaseLife();
        removeBgById(character);
        if((parseInt(document.getElementById('life').innerText)) >0){
            continuePlay();
        }
        else{
            removeClassByIdname('scorePage');
            addClassByIdname('play');
        }
        
    }
}
function continuePlay(){
    let character= getChar();
    document.getElementById('target').innerText= character;
    addBgById(character);
}



