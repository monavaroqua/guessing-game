'use strict';

    let userName = prompt ('please enter your first name');
       alert (' welcome ' + userName + ' kindly answer these questions');
       console.log(userName);

    
       let firstQuestion = prompt('do i have a pet?');
       while (firstQuestion !== 'yes' && firstQuestion !== 'no') {
           firstQuestion = prompt ('please answer with yes or no');
       }

       let firQues = '';
if (firstQuestion == "yes") {
    alert ('you are right, i have a tortoise');

}
else if (firstQuestion == "no") {
    alert= 'you are wrong, i have a tortoise';

}
document.write(firQues);


       
    
       let secondQuestion = prompt('do i live in jordan');
       while (secondQuestion !== 'yes' && secondQuestion !== 'no') {
           secondQuestion = prompt ('please answer with yes or no');
       }

       let secQues = '';
       if (secondQuestion == "yes") {
           alert (' right, i live in jordan');
       
       }
       else if (secondQuestion == "no") {
           alert= ' actually i live in jordan';
       
       }
       document.write(secQues);

       
       let thirdQuestion = prompt('do i love sweets?');
       while (thirdQuestion !== 'yes' && thirdQuestion !== 'no') {
           thirdQuestion = prompt ('please answer with yes or no');
       }

       let thirdQues = '';
       if (thirdQuestion == "yes") {
           alert ('i dont really have a sweet teeth');
       
       }
       else if (thirdtQuestion == "no") {
           alert= 'you are right again *_*';
       
       }
       document.write(thirdQues);

       let fourthQuestion = prompt('am i a gamer?');
       while (forthQuestion !== 'yes' && forthQuestion !== 'no') {
           forthQuestion = prompt ('please answer with yes or no');
       }
       let fourQues = '';
       if (fourthQuestion == "yes") {
           alert ('no i play and lose');
       
       }
       else if (fourthtQuestion == "no") {
           alert= 'you are right .i am not';
       
       }
       document.write(fourQues);
      