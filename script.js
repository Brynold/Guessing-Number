'use strict';

const sendKeys=function( elementName,value){
    document.querySelector(`.${elementName}`).textContent= value;
 }

 const changeBgColor= function(elementName,color){
     document.querySelector(elementName).style.backgroundColor= color ;
 }

   
let  guess=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

// check Button 
document.querySelector('.check').addEventListener('click',function(){
        let inputData=Number(document.querySelector('.custNumber').value);

        if(! inputData){
            sendKeys('message','🛑 not a Number');

        }else if(inputData===guess){
            sendKeys('message','🎊 Correct Number');
            sendKeys('number',guess);
            changeBgColor('body','green');

            if(score > highScore){
                highScore=score;
                sendKeys('highScore',highScore);
            }

        }else if(inputData!== guess){
          if(score>1){
            sendKeys('message',inputData>guess? ' 🤣 Too High': '😮 Too Low');
          score--;
          sendKeys('points',score);
          }
          else{
            sendKeys('message',' 😌 your Turn is Over');
            sendKeys('points',0);
          }

        }

});

// Again Button

document.querySelector('.again').addEventListener('click', function(){
    sendKeys('message','Start guessing....');
    sendKeys('points',20);
    score=20;
    changeBgColor('body','#333');
    document.querySelector('.custNumber').value='';

})


