'use strict';
//I want to import the account.js file 

const account = require('./account');
var prompt = require('prompt-sync')();
console.log(account);

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
        console.log("Invalid Pin! Please verify the PIN number or Account number you entered is correct\n");
        return false;
    }
}


function getBalance(){
    //console.log(account.userData[0].accountBal)
   var userInfo = validatePin();
   if (userInfo != false){
       return userInfo.accountBal;
   }
   return false;
  
}

function withdraw(){
    var userInfo = validatePin();
    var currentBal = userInfo.accountBal;
    var amountToWithdraw = prompt("Current Balance: " + currentBal + "\nPlease enter the amount you would like to withdraw or press x to cancel this transaction: ");

    if (amountToWithdraw == 'x'){
        console.log("Transaction Cancelled, returning to the main menu...")
        return;
    }

    //var userInfo = validatePin(); //returns info of verified user
    
    while( parseInt(amountToWithdraw) > currentBal){
        console.log("Sorry! The amount you wish to withdraw exceeds your current balance, please enter an amount lower than " + currentBal + ":\n")
        amountToWithdraw = prompt("Current Balance: " + currentBal + "\nPlease enter the amount you would like to withdraw or press x to cancel this transaction: ");
        if (amountToWithdraw == 'x'){
            console.log("Transaction Cancelled, returning to the main menu...")
            return;
        }
    }

        console.log("Processing Request... ")
        userInfo.accountBal -= amountToWithdraw;
        //testing is pass by ref or value
        var newBal = getBalance();
        console.log("new balance is: " + newBal);

        sleep(2000);
        console.log("Success!.. your cash is now being dispensed, dont forget to retrieve your card! ");
        sleep(2000);
        console.log("Returning to the main menu")
;    
}

function deposit(){

var userInfo = validatePin();
var currentBal = userInfo.accountBal;
var amountToDeposit = prompt("Current Balance: " + currentBal + "\nPlease enter the amount you would like to deposit or press x to cancel this transaction: ");

if (amountToDeposit == 'x'){
    console.log("Transaction Cancelled, returning to the main menu...")
    return;
}
else{
    console.log("Processing Request... ")
        userInfo.accountBal += amountToDeposit;
        var newBal = getBalance();

        sleep(2000);
        console.log("Deposit Successful!.. your new balance is: " + newBal);
        sleep(2000);

        //ask user if they want to make another deposit? maybe
        console.log("Returning to the main menu")
}

}
//getBalance();

module.exports = {
    getBalance : getBalance,
    withdraw : withdraw,
    deposit : deposit,
    validatePin : validatePin 

}