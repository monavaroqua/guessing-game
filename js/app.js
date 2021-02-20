'use strict';
let score=0;


    let userName = prompt ('please enter your first name');
   
       alert (' welcome ' + userName + ' kindly answer these questions');
    
       //console.log(userName);

    
       let firstQuestion = prompt('do i have a pet?');
       while (firstQuestion !== 'yes' && firstQuestion !== 'no') {
           firstQuestion = prompt ('please answer with yes or no');
       }
    
       if (firstQuestion ==='yes' && firstQuestion !=='no') {
           alert ('you are right, i have a tortoise');
         score++;
       }
       else{
           alert ('you are wrong, i have a tortoise');

       }
       

       
       let secondQuestion = prompt('do i live in jordan');
       while (secondQuestion !== 'yes' && secondQuestion !== 'no') {
           secondQuestion = prompt ('please answer with yes or no');
       }

       if (secondQuestion ==='yes' && secondQuestion !=='no') {
        alert ('correct, i live in jordan');
        score++;
      
    }
    else{
        alert ('actually i live in jordan');

    }
    
       let thirdQuestion = prompt('do i love sweets?');
       while (thirdQuestion !== 'yes' && thirdQuestion !== 'no') {
           thirdQuestion = prompt ('please answer with yes or no');
       }

       if (thirdQuestion==='yes' && thirdQuestion !=='no') {
        alert ('sorry i do not have sweet teath');
    
    }
    else{
        alert ('you are right again');
        score++;
       

    } let fourQuestion = prompt('can i cook?');
    while (fourQuestion !== 'yes' && fourQuestion !== 'no') {
        fourQuestion = prompt ('please answer with yes or no');
    }

    if (fourQuestion ==='yes' && fourQuestion !=='no') {
        alert ('true i can cook delecious food');
        score++;
       
    
    }
    else{
        alert ('i can cook well');

    }


    let lastQuestion = prompt('do i speak french?');
    while (lastQuestion !== 'yes' && lastQuestion !== 'no') {
        lastQuestion = prompt ('please answer with yes or no');
    }

    if (lastQuestion ==='yes' && firstQuestion !=='no') {
        alert ('oui je parle francais');
        score++;
      
    }
    else{
        alert ('i speak french');

    }

     let luckyNumber = prompt('can guess my lucky number ?');


 while (luckyNumber === ' ' && luckyNumber === null) {
  luckyNumber = Number(prompt('can you guess my lucky number ?'));
 }

 for (let i = 0; i <= 3 ; i++) {
   if (luckyNumber > 13) {
     alert('wrong answer   \n  This is too high  Try again');
     luckyNumber = Number(prompt('can you guess my lucky number'));
   }
   if (luckyNumber < 13) {
     alert('wrong answer  \n This is too low  Try again');
     luckyNumber = Number(prompt('can you guess my lucky number ?'));
   }
   if (luckyNumber === 13) {

     alert('you guessed it right,good job');
     score++;

{ break; }
   }

}



    let arr=['cat','elephant','rabbit','dog','lizard','hamster','bird','lion','monkey','lama'];

    alert('cat,elephant,rabbit,dog,lizard,hamster,bird,lion,monkey,lama')
    
        let animal=prompt('can you guess my favourite animal from the previous list?');

        for (let i=0;i<5;i++) {
            if (animal === arr[1]) { 
            
                alert ('you are right');
                score++;
                break;   
            }
             else {
                    animal=prompt('give it another try');
                    }
                }
            alert('it is elephant')
           alert('your score is ==>'+score+'out of 7')