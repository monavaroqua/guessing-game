'use strict';

    let userName = prompt ('please enter your first name');
       alert (' welcome ' + userName + ' kindly answer these questions');
       console.log(userName);

    
       let firstQuestion = prompt('do i have a pet?');
       while (firstQuestion !== 'yes' && firstQuestion !== 'no') {
           firstQuestion = prompt ('please answer with yes or no');
       }
    
       if (firstQuestion.toLowerCase()==='yes' && firstQuestion.toLowerCase()!=='no') {
           alert ('you are right, i have a tortoise');
       }
       else{
           alert ('you are wrong, i have a tortoise');

       }
       

       
       let secondQuestion = prompt('do i live in jordan');
       while (secondQuestion !== 'yes' && secondQuestion !== 'no') {
           secondQuestion = prompt ('please answer with yes or no');
       }

       if (secondQuestion.toLowerCase()==='yes' && secondQuestion.toLowerCase()!=='no') {
        alert ('correct, i live in jordan');
    }
    else{
        alert ('actually i live in jordan');

    }
    
       let thirdQuestion = prompt('do i love sweets?');
       while (thirdQuestion !== 'yes' && thirdQuestion !== 'no') {
           thirdQuestion = prompt ('please answer with yes or no');
       }

       if (thirdQuestion.toLowerCase()==='yes' && thirdQuestion.toLowerCase()!=='no') {
        alert ('sorry i do not have sweet teath');
    
    }
    else{
        alert ('you are right again');

    } let fourQuestion = prompt('can i cook?');
    while (fourQuestion !== 'yes' && fourQuestion !== 'no') {
        fourQuestion = prompt ('please answer with yes or no');
    }

    if (fourQuestion.toLowerCase()==='yes' && fourQuestion.toLowerCase()!=='no') {
        alert ('true i can cook delecious food');
    
    }
    else{
        alert ('i can cook well');

    }


    let lastQuestion = prompt('do i speak french?');
    while (lastQuestion !== 'yes' && lastQuestion !== 'no') {
        lastQuestion = prompt ('please answer with yes or no');
    }

    if (lastQuestion.toLowerCase()==='yes' && firstQuestion.toLowerCase()!=='no') {
        alert ('oui je parle francais');
    
    }
    else{
        alert ('i speak french');

    }
    let coolQuestion = prompt('please guess a number');

