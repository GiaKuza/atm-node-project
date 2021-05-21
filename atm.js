'use strict';
//I want to import the account.js file 

const account = require('./account');
var prompt = require('prompt-sync')();
//console.log(account);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }



function validatePin(){
    var userInfo = {};
    var isValidated = false;
    var accountNum = parseInt(prompt('Please enter 10-digit account number: '));
    var pin = parseInt(prompt('Please enter your 4-digit pin number: '));
    
    for (let i = 0; i < account.userData.length; i++){
        if ( (accountNum == account.userData[i].accountNum) && (pin == account.userData[i].pin)){
            userInfo = account.userData[i];
            isValidated = true;
        }
    }
    if(isValidated){
        return userInfo;
    }
    else{
        
        return false;
    }
}


function getBalance(userInfo){
  return userInfo.accountBal;
}

function withdraw(userInfo){
    
    var currentBal = getBalance(userInfo);
    console.log("\nCurrent Balance: " + currentBal + "\nPlease enter the amount you would like to withdraw or press x to return to the main menu: ")
    var amountToWithdraw = prompt("> ");

        
         if(parseInt(amountToWithdraw) > currentBal){
            console.log("Error! The amount you wish to withdraw exceeds your current balance, please enter an amount lower than " + currentBal + "\n");
        }
         else{

            console.log("Processing Request... ")
            userInfo.accountBal -= amountToWithdraw;
            currentBal = getBalance(userInfo);

            sleep(2000);
            console.log("Success!.. your cash is now being dispensed... ");
            sleep(2000);
         }
         console.log("\nCurrent Balance: " + currentBal + "\nPlease enter the amount you would like to withdraw or press x to return to the main menu ");
         amountToWithdraw = prompt("> ");
        
     console.log("\nOK! Returning to the main menu...");
     return;
    
    }
   

function deposit(userInfo){

//var userInfo = validatePin();
var currentBal = getBalance(userInfo);
console.log("\nCurrent Balance: " + currentBal + "\nPlease enter the amount you would like to deposit or press x to return to the main menu ");
var amountToDeposit = prompt("> ");

if (amountToDeposit == 'x'){
    console.log("\nOK! Returning to the main menu...");
    return;
}
else{
    console.log("Processing Request... ")
        userInfo.accountBal = parseInt(userInfo.accountBal) +  parseInt(amountToDeposit);
        currentBal = getBalance(userInfo);

        sleep(1000);
        console.log("Deposit Successful!.. your new balance is: " + currentBal);
        sleep(1000);

        //ask user if they want to make another deposit? maybe
        console.log("Returning to the main menu");
        return;
}
}


module.exports = {
    getBalance : getBalance,
    withdraw : withdraw,
    deposit : deposit,
    validatePin : validatePin, 
    sleep : sleep

}