'use strict';
var prompt = require('prompt-sync')();
const { sleep } = require('./atm');
//const atm = require('./atm');
const atmFunctions = require('./atm');

/////var isValidated = atmFunctions.validatePin();
//console.log(isValidated)

//if get balance == false, return to main menu
//console.log(atmFunctions.getBalance());

//atmFunctions.withdraw();//
//atmFunctions.deposit();






//write a menu 

function displayBal(info){
    let bal = atmFunctions.getBalance(info);
    console.log("Your current balance is " + bal + "\n");
    sleep(3000);
    console.log("press x to return to the main menu...")
    let userSelection = prompt("> ");
    if(userSelection == 'x'){
    console.log("\nReturning to the main menu...");
    }
    return;

}

function displayUserMenu(){
    
    
    let userInfoValidated = atmFunctions.validatePin();
    console.log("Please wait... Verifying account information");
    sleep(2000);

    if(userInfoValidated){
    console.log("\nAccess Granted!\n")
    console.log("\nWelcome " + userInfoValidated.firstName + " " + userInfoValidated.lastName + ",")
    sleep(2000);
    
    
    console.log("\nPlease make a selection from the following menu:\n"); 
    console.log("\n(1) View Account Balance\n(2) Withdrawal\n(3) Deposits\n(4) Exit\n")   
    var userSelection = prompt('> ');
    while(parseInt(userSelection) > 0 && parseInt(userSelection) < 5 ){
    switch (parseInt(userSelection)){
        case 1:
            displayBal(userInfoValidated);
            
            break;
        case 2:
            atmFunctions.withdraw(userInfoValidated);
            break;
        case 3:
            atmFunctions.deposit(userInfoValidated);
            break;
        case 4:
            console.log("Exiting... Good Bye!")
            return;
        }
        console.log('\n(1) View Account Balance\n(2) Withdrawal\n(3) Deposits\n(4) Exit\n')
        userSelection = prompt("> ");
       
    }//end of while loop
    }
    else {
        console.log("Invalid Account Number or PIN number, please check and try again;")
        
        
    }

}


    console.log("\n\nWelcome to Tungsten Credit Union\n");
    //let userInfo = null;
    //userInfo = atmFunctions.validatePin();

    displayUserMenu();
    

