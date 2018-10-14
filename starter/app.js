/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,stateVariable ,winning,input;

inti();
var perivousScore;

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>'





/*
var x=document.querySelector('#score-0').textContent;-----(method-1)to take the content from an element
console.log(x);


var y=document.querySelector('#score-1').innerHTML;-------(method-2)to change the content from an element
console.log(y);


var z=document.querySelector('#score-0').textContent=34;-----(method-1)to change the content of a element
console.log(z);


var a=document.querySelector('#score-0').textContent=23;------(method-2)to change the content of a element
console.log(a);
*/












//document.querySelector('.btn-roll').addEventListener('click',btn);----------This function btn is called callBack function and is already defined /declared in the above code





  document.querySelector('.btn-roll').addEventListener('click',function(){             //---------Anmoynus function ,function whose declaration has been done within the event listener without any Name

if(stateVariable){
    document.querySelector('.final-score').disabled=true;

    //1.Random no.
       var dice;   //-------Random 
      dice1 = Math.floor(Math.random()*6)+1;
      dice2 = Math.floor(Math.random()*6)+1;


     //2.Display the result
     document.getElementById('dice-1').style.display='block';
     document.getElementById('dice-2').style.display='block';
     document.getElementById('dice-1').src='dice-'+dice1+'.png';
     document.getElementById('dice-2').src='dice-'+dice2+'.png';


     //3.update the round score


     if(perivousScore===6 && dice===6){

        //---Player Loses all his points

        scores[activePlayer]=0;
        document.querySelector('#score-'+activePlayer).textContent='0';
        nextPlayer();

     }
     else if(dice1 !== 1 && dice2 !==1){

        //add score
        roundScore=roundScore+dice1+dice2;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
     }
     else{
        //document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')---------To remove active class from active player

         nextPlayer();


         //------NOTE:[The code written below is written in a function as it is used in hold function to change the active element.....]

       /*



       {
       activePlayer===0?activePlayer=1:activePlayer=0;

        //document.querySelector('.player-'+activePlayer+'-panel').classList.add('active')---------To remove active class from active player



        document.getElementById('current-0').innerHTML='0';
        document.getElementById('current-1').innerHTML='0';


                      //Toggle  Is used to 
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
       
        document.querySelector('.dice').style.display='none';    //--------- If it is [1] then hide the dice  

       }


        */


     }

     perivousScore=dice;
    }



}
);            












//Now its time to set the hold button
 
    document.querySelector('.btn-hold').addEventListener('click',function(){

if(stateVariable){
    // ----1.] Add current score global score

     scores[activePlayer]+=roundScore;
 
     
    //------ 2.] Updating the values in document element.
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];





    //Coding Challenge part -2
      
 input=document.querySelector('.final-score').value;
  
 document.querySelector('.final-score').disabled=true;


   if(input){
      winning=input;
   }
   else{
       winning=100;
   }




    //------ 3.] If the score is greater than 100 the do the following.
    if(scores[activePlayer] >= winning){
        document.querySelector('#name-'+ activePlayer).textContent='Winner!'; 
       document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
       document.querySelector('.dice').style.display='none';
       stateVariable=false;                             
             
    }
    else{
        nextPlayer();    //Here this is called as dry principle i.e calling an fuction inside some other function.In short, putting the code inside a function if is being used again and again.

    }
  
   }

});

//To set the new Game Button 
document.querySelector('.btn-new').addEventListener('click',inti);     //-----Here we don't do inti() as it call inti function and not on clicking the button new game



function inti(){


    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    stateVariable=true;

    document.querySelector('.final-score').value='';

    document.querySelector('.final-score').disabled=false;


    //To get element by ID.
       document.getElementById('score-0').textContent='0';
       document.getElementById('score-1').textContent='0';
       document.getElementById('current-0').textContent='0';
       document.getElementById('current-1').textContent='0';

       document.getElementById('dice-1').style.display='none';
       document.getElementById('dice-2').style.display='none';

       document.getElementById('name-0').textContent='Player-1';
       document.getElementById('name-1').textContent='Player-2';
          
       //To set a button of New game[i]
       document.querySelector('.player-0-panel').classList.remove('winner');
       document.querySelector('.player-1-panel').classList.remove('winner');
       document.querySelector('.player-0-panel').classList.remove('active');//Don't know why used but just remove all the active classes
       document.querySelector('.player-1-panel').classList.remove('active');//Don't know why used but just remove all the active classes

      //To add active class ----  document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
       document.querySelector('.player-0-panel').classList.add('active');




}







//Function to change the active member 
function nextPlayer(){
   

    activePlayer===0?activePlayer=1:activePlayer=0;

    roundScore=0;


    document.getElementById('current-0').innerHTML='0';
    document.getElementById('current-1').innerHTML='0';


    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
   
    document.getElementById('dice-1').style.display='none'; 
    document.getElementById('dice-2').style.display='none'; 

}






