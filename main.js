(function init(){
    let formElm=document.querySelector('form');
    let winInput=document.getElementById('win-input');
    let saveBtn=document.querySelector('input[type=submit]');
    let winScoreElm=document.querySelector('.win-score');
    let p1ScoreElm=document.querySelector('.p1-score');
    let p2ScoreElm=document.querySelector('.p2-score');
    let diceElm=document.querySelector('.dice-point');
    let startBtn=document.querySelector('.start');
    let p1Btn=document.querySelector('.p1-button');
    let p2Btn=document.querySelector('.p2-button');
    let resetBtn=document.querySelector('.reset');

    let winScore=0;
    let p1Score=0;
    let p2Score=0;
    let diceScore=0;

    winScoreElm.textContent=winScore;
    p1ScoreElm.textContent=p1Score;
    p2ScoreElm.textContent=p2Score;
    diceElm.textContent=diceScore;

    winInput.setAttribute('disabled',true);
    saveBtn.setAttribute('disabled',true);
    p1Btn.setAttribute('disabled','true');
    p2Btn.setAttribute('disabled','true');
    resetBtn.setAttribute('disabled','true');


    function getDiceValue(){
        return Math.floor(Math.random()*6+1);
    }

    function displayWinner(p1WinState,p2WinState){
        if(p1WinState){
            formElm.insertAdjacentHTML("beforeend","<p class='message'>Congrates! Player 1 is Winner!</p>");
        }else if(p2WinState){
            formElm.insertAdjacentHTML("beforeend","<p class='message'>Congrates! Player 2 is Winner!</p>");
        }
    }

    function checkWinner(){
        isP1Winner= p1Score >= winScore;
        isP2Winner= p2Score >= winScore;
        if(isP1Winner || isP2Winner){
            p1Btn.setAttribute('disabled','true');
            p2Btn.setAttribute('disabled','true');
            displayWinner(isP1Winner,isP2Winner);
        }
    }

    startBtn.addEventListener('click',function(e){
        winInput.removeAttribute('disabled');
        saveBtn.removeAttribute('disabled');
        resetBtn.removeAttribute('disabled');
        alert('Enjoy The Dice Game!!');
        this.setAttribute('disabled','true');
    })

    formElm.addEventListener('submit',function(e){
        e.preventDefault();
        let inputValue = winInput.value;
        if(inputValue === '' || inputValue < 0){
            formElm.insertAdjacentHTML("beforeend","<p class='message'>Please Enter a Postive Value</p>");
        }else{
            winScore=inputValue;
            winScoreElm.textContent = Number(inputValue);
            winInput.value='';
            p1Btn.removeAttribute('disabled');
            p2Btn.removeAttribute('disabled');
            winInput.setAttribute('disabled','true');
            saveBtn.setAttribute('disabled',true);
            if(document.querySelector('.message')){
                document.querySelector('.message').remove();
            }
        }
        
    })

    p1Btn.addEventListener('click',function(e){
        diceScore=getDiceValue();
        p1Score+=diceScore
        diceElm.textContent=diceScore;
        p1ScoreElm.textContent=p1Score;
        diceScore=0;
        this.setAttribute('disabled','true');
        p2Btn.removeAttribute('disabled');
        checkWinner();
    })


    p2Btn.addEventListener('click',function(e){
        diceScore=getDiceValue();
        p2Score+=diceScore
        diceElm.textContent=diceScore;
        p2ScoreElm.textContent=p2Score;
        diceScore=0;
        this.setAttribute('disabled','true');
        p1Btn.removeAttribute('disabled');
        checkWinner();
    })

    resetBtn.addEventListener('click',function(e){
        winInput.removeAttribute('disabled');
        saveBtn.removeAttribute('disabled');
        winScore=p1Score=p2Score=0;
        winScoreElm.textContent=winScore;
        p1ScoreElm.textContent=p1Score;
        p2ScoreElm.textContent=p2Score;
        diceElm.textContent=diceScore;
        p1Btn.setAttribute('disabled','true');
        p2Btn.setAttribute('disabled','true');
        if(document.querySelector('.message')){
            document.querySelector('.message').remove();
        }
    })



})();