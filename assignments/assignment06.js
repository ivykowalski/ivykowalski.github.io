//STEP 1 deploy template code
// --- global variables ---

var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 

// --- function: loadDoc() ---
//STEP 2 add jQuery
//instead of function loadDoc() {
  $(document).ready(function(){
    
  // pre-fill defaults for first loan year
  var defaultYear = loans[0].loan_year;
    //change document.getElementById to jQuery using $
    //.val(defaultYear++) instead of .value = defaultYear++
  $("loan_year0" + 1).val(defaultYear++);
  var defaultLoanAmount = loans[0].loan_amount;
    //switch to jQuery as explained above
  $("loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
  var defaultInterestRate = loans[0].loan_int_rate;
    //switch to jQuery as explained above
  $("loan_int0" + 1).val(defaultInterestRate);
  var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
    //instead of .innerHTML use .text and use function toMoney
  $("loan_bal0" + 1).text(toMoney(loanWithInterest));
  
  // pre-fill defaults for other loan years
  for(let i=2; i<6; i++) {
    //convert to jQuery as explained above
    $("loan_year0" + i).val(defaultYear++);
    //use attr to disable
    $("loan_year0" + i).attr("disabled", true);
    //use css to change background color
    $("loan_year0" + i).css("backgroundColor": "gray");
    $("loan_year0" + i).css("color": "white");
    $("loan_amt0" + i).val(defaultLoanAmount.toFixed(2));
    $("loan_int0" + i).val(defaultInterestRate);
    $("loan_int0" + i).attr("disabled", true);
    $("loan_int0" + i).css("backgroundColor": "gray");
    $("loan_int0" + i).css("color": "white");
    //set all values with loan_int0 id to gray background and color white using jQuery $
   loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
   $("loan_bal0" + i).text(toMoney(loanWithInterest));
    } // end: "for" loop
  
  // all input fields: select contents on focus
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
  });
  
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
  $("#loan_year01").blur( function() {
    updateLoansArray();
  });
  
}); // end: function loadDoc(), and thus end of jQuery

//functions necessary for completion
function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//use regular expression to make value look like money value
function toMoney(value) =>
    return `\$${toComma(value.toFixed(2))}`;
}
//STEP 4 save to local storage
 let savedata = () => { 
         localStorage.setItem(`as06`, JSON.stringify(loans));
 }
 
     let loaddata = () => { //begin loadata method
         if (localStorage.getItem(`as06`) != null) { //if there is on-device data
             loans = JSON.parse(localStorage.getItem(`as06`)); //apply values from the saved data to loans
             updateForm(); //apply values to what is seen
         } else { //if there is no on device data
             alert("Error: no saved values"); //alert user to lack of on device data
         }
     }

     function updateLoansArray() {

         //the following values will controll the ability for a value to be entered.
         let yearcontroller = /^(19|20)\d{2}$/; //checks if the value is a number and within 1899 and 2099
         let amountcontroller = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/; //checks if the value is a number and above 1 whole dollar
         let integercontroller = /^(0|)+(.[0-9]{1,5})?$/; //checks to ensure the value is a number is below 1.0
         let tracker = true; //used to see if there is anything wrong with the constraints listed above

         if (!yearcontroller.test($(`#loan_year01`).val())) { //if yearcontroller does not pass
             tracker = false; //set to false
             alert("error in year field"); //prompt user with incorrect value
         }

         for (i = 1; i < 6; i++) { //loop through full amount field
             if (!amountcontroller.test($(`#loan_amt0${i}`).val())) { //if amountcontrolelr is not passed
                 tracker = false; //set to false
                 alert("error in amount field in box: " + i); //prompt user with error in boxes
             }
         }

         if (!integercontroller.test($(`#loan_int01`).val())) { //if integercontroller is not passed
             tracker = false; //set to false
             alert("error in interest rate field"); //prompt user with error in interest rate field.
         }

         if (tracker) { //if all previous operations pass with flying colors execute follwing action
             loans[0].loan_year = parseInt($("#loan_year01").val()); //pass the year value from the input box
             for (var i = 1; i < 5; i++) { //loop for the rest ofthe input field
                 loans[i].loan_year = loans[0].loan_year + i; //apply value to loans adding i for proper input
             }

             for (i = 1; i < 6; i++) { //loop for entirety of amount field to save values
                 let amount = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2); //pass the float value as it is a decimal value technically
                 loans[i - 1].loan_amount = amount; //save value to loans array.
             }

             let interestrate = parseFloat($("#loan_int01").val()); //generate interest rate value
             for (i = 0; i < 5; i++) { //loop for interest rate field
                 loans[i].loan_int_rate = interestrate; //save interest rate to loans
             }



             updateForm(); //run updateform to apply values

         }

     }

     let updateForm = () => {
         loanWithInterest = 0; //initialize loanwithinterest
         let totalloan = 0; //create and initialize the totalloan value
         for (i = 1; i < 6; i++) { //loop for entire field
             $(`#loan_year0${i}`).val(loans[i - 1].loan_year); //change the value of the entirety of the loan_year field based on values stored in loans
             let loaned = loans[i - 1].loan_amount; //create and initialize loaned variable
             $(`#loan_amt0${i}`).val(loaned); //pull the loaned amount
             totalloan += parseFloat(loaned); //accumulate total amount loaned
             $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate); //pull integer value
             loanWithInterest = (loanWithInterest + parseFloat(loaned)) * (1 + loans[0].loan_int_rate); //calculate the total loaned value with interest
             $("#loan_bal0" + i).text(toMoney(loanWithInterest)); //apply value of loanwithinterest
         }
         let totalamountowed = loanWithInterest - totalloan;
         $(`#loan_int_accrued`).text(toMoney(totalamountowed)); //apply value for total interest collected over college career  
     }


     var app = angular.module('appdata', []); //create and initialize app using angular inside the appdata field

     app.controller('alldata', function($scope) { //in the controller field of the html and everything within the alldata field
         $scope.payments = []; //find the payments h2

         $scope.populate = function() { //begin populate function

             updateForm(); //update what is visible

             let endprice = loanWithInterest; //initialize an endprice value using loanwithinterest
             let interestrate = loans[0].loan_int_rate; //initialize an interestrate value based on loan in rate
             let r = interestrate / 12; //create an r value to represnt interest over months instead of years
             let n = 11; //create an n value for the purpose of not including one month

             let pay = 12 * (endprice / ((((1 + r) ** (n * 12)) - 1) / (r * (1 + r) ** (n * 12)))); //calculate payment
             for (let i = 0; i < 10; i++) { //loop 10 times
                 endprice -= pay //decrease endprice
                 let interested = endprice * (interestrate); //create and initialize int to be equal to the montly interest rate * end price
                 $scope.payments[i] = { //adjust payments values
                     "year": loans[4].loan_year + i + 1, //go to year the next
                     "payed": toMoney(pay), //apply what is payed
                     "interestamount": toMoney(interested), //apply what the amount interested was
                     "endbalance": toMoney(endprice += interested) //apply what the end price looks like
                 }
             }
             $scope.payments[10] = { //at position 10 aply the following values
                 "year": loans[4].loan_year + 11, //year will equal the year of interest plus 11
                 "payed": toMoney(endprice), //the amount payed will be equivelant to the ending price
                 "interestamount": toMoney(0), //the amount interested should be zero as there is nothing left to increase
                 "endbalance": toMoney(0) //the balance of what is owed will be zero as there is nothing left to interest there either.
             }
         }
     });
