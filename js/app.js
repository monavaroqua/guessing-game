'use strict';
let score = 0;

    let userName = prompt ('please enter your first name');
       alert (' welcome ' + userName + ' kindly answer these questions');
       console.log(userName);

    
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
        score++,
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
        score++,

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
    let coolQuestion = prompt('please guess a number');

for(let i=0 ; i < 5 ; i++ );{


if(Number(coolQuestion)==13)
{
  alert('you guessed right');
  score++; 
  
  break;

}
else
{
  if (Number(coolQuestion)>13){
    alert('too high');
    coolQuestion=prompt('please guess a number');
  }
  if(Number(coolQuestion)<13)
  { alert('too low');
    coolQuestion=prompt('please guess a number?');
  }
}

alert('it's 13');


    let arr = ['cat','elephant','rabbit','dog','hamster','lizard','birds','lama','monkey','lion']
alert('cat','elephant','rabbit','dog','hamster','lizard','birds','lama','monkey','lion']
alert)
    let animal=prompt('what is my favourite animal?');
if (animal == arr[1])
{
    alert ('you are right');
    
score++;
}
    else {
        animal=prompt('my favourite animal');

    }
    alert('your score is-->'+score+'out of 7');