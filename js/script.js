//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS
 


// DOCUMENT READY FUNCTION
$(document).ready(function() {
        var input=$('#userinput');
        var winner=$('#winner');
        var user=$('#user');
        var computer=$('#computer');
        input.on('keypress',function(event){
                if(event.keyCode == 13){
                        checkwinner(input.val().toLowerCase());
                } 
        });
        
        function checkwinner(userinput) {
                var choices=['rock','paper','scissors'];
                var computerchoice=getRandomIntInclusive(0,2);
                var computerinput=choices[computerchoice];
                var gamewinner='';
                console.log(userinput,computerinput);
                if(userinput == 'rock' && computerinput == 'rock'){
                        gamewinner='tie';
                }else if(userinput == 'rock' && computerinput == 'paper'){
                        gamewinner='computer';
                }else if(userinput == 'rock' && computerinput == 'scissors'){
                        gamewinner='user';
                }else if(userinput == 'paper' && computerinput == 'rock'){
                        gamewinner='user';
                }else if(userinput == 'paper' && computerinput == 'paper'){
                        gamewinner='tie';
                }else if(userinput == 'paper' && computerinput == 'scissors'){
                        gamewinner='computer';
                }else if(userinput == 'scissors' && computerinput == 'rock'){
                        gamewinner='computer';
                }else if(userinput == 'scissors' && computerinput == 'paper'){
                        gamewinner='user';
                }else if(userinput == 'scissors' && computerinput == 'scissors'){
                        gamewinner='tie';
                }
                winner.html(gamewinner);
                user.html(userinput);
                computer.html(computerinput);
                
        }
        //source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
        }
});
