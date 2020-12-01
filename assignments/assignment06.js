//STEP 1 deploy template code
// --- global variables ---
var loans = [{
        loan_year: 2020,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    },
    {
        loan_year: 2021,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    },
    {
        loan_year: 2022,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    },
    {
        loan_year: 2023,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    },
    {
        loan_year: 2024,
        loan_amount: 10000.00,
        loan_int_rate: 0.0453
    }
];


//STEP 2 add jQuery
//instead of function loadDoc()

$(document).ready(function() {

    // pre-fill defaults for first loan year
    var defaultYear = loans[0].loan_year;
    //change document.getElementById to jQuery using $
    //.val(defaultYear++) instead of .value = defaultYear++
    $("#loan_year0" + 1).val(defaultYear++);
    var defaultLoanAmount = loans[0].loan_amount;
    //switch to jQuery as explained above
    $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
    var defaultInterestRate = loans[0].loan_int_rate;
    //switch to jQuery as explained above
    $("#loan_int0" + 1).val(defaultInterestRate);
    var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
    //instead of .innerHTML use .text and use function toMoney
    $("#loan_bal0" + 1).text(toMoney(loanWithInterest));

    // pre-fill defaults for other loan years
    for (let i = 2; i < 6; i++) {
        //convert to jQuery as explained above
        $(`#loan_year0${i}`).val(defaultYear++);
        //use attr to disable
        $(`#loan_year0${i}`).attr("disabled", "true");
        //use css to change background color
        $(`#loan_year0${i}`).css({
            "backgroundColor": "grey",
            "color": "white"
        });
        //apply $10,000 value to the full loan_amt0 id
        $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
        //apply default interest rate along column and anything with the id of loan_int0
        $(`#loan_int0${i}`).val(defaultInterestRate);
        //disable ids with the loan_int0 value except for the first one
        $(`#loan_int0${i}`).attr("disabled", "true");
        $(`#loan_int0${i}`).css({
            "backgroundColor": "grey",
            "color": "white"
        });
        loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
        //to jQuery and uses function toMoney
        $("#loan_bal0" + i).text(toMoney(loanWithInterest));
    } // end: "for" loop

    // all input fields: select contents on focus
    $("input[type=text]").focus(function() {
        $(this).select();
        $(this).css("background-color", "yellow");
    });
    $("input[type=text]").blur(function() {
        $(this).css("background-color", "white");
        updateLoansArray();
    });

    // set focus to first year: messes up codepen
    $("#loan_year01").focus();

}); // end: function loadDoc()

//functions necessary for program completion

function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//converts numbers to look like money
let toMoney = (value) => {
    return `\$${toComma(value.toFixed(2))}`;
}
//STEP 4 save to localStorage
let savedata = () => {
    localStorage.setItem(`as06`, JSON.stringify(loans));
}

let loaddata = () => {
    //if there is on-device data
    if (localStorage.getItem(`as06`) != null) {
        //apply values from the saved data to loans
        loans = JSON.parse(localStorage.getItem(`as06`));
        //update the from with new data values
        updateForm();
        //if there is no on device data
    } else {
        //alert the error
        alert("Error: no saved values");
    }
}

function updateLoansArray() {
    //STEP 3 add regular expressions to validate input fields
    //ensures the value is a number and within 1899 and 2099
    let yearcontroller = /^(19|20)\d{2}$/;
    //ensures amountcontroller is a number that is greater than 1
    let amountcontroller = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
    //ensures integercontroller is a number that is below 1
    let integercontroller = /^(0|)+(.[0-9]{1,5})?$/;
    //originally sets validator to true
    let valid = true;
    //if yearcontroller does not pass
    if (!yearcontroller.test($(`#loan_year01`).val())) {
        //validator should be false
        valid = false;
        //alert the error
        alert("error in year field");
    }
    //loop through full amount field
    for (i = 1; i < 6; i++) {
        //if amountcontrolelr does not pass
        if (!amountcontroller.test($(`#loan_amt0${i}`).val())) {
            //validator should be false
            valid = false;
            //alert the error
            alert("error in amount field in box: " + i);
        }
    }
    //if integercontroller does not pass
    if (!integercontroller.test($(`#loan_int01`).val())) {
        //validator should be false
        valid = false;
        //alert the error
        alert("error in interest rate field");
    }
    //if valid is true, and thus every case has passed
    if (valid) {
        //pass the year value from the input
        loans[0].loan_year = parseInt($("#loan_year01").val());
        //loop through the rest of the input field
        for (var i = 1; i < 5; i++) {
            //apply value to loans
            loans[i].loan_year = loans[0].loan_year + i;
        }
        //loop through amount field to save values
        for (i = 1; i < 6; i++) {
            //pass the float value
            let amount = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);
            //save the value to the loans array
            loans[i - 1].loan_amount = amount;
        }
        //create interest rate value
        let interestrate = parseFloat($("#loan_int01").val());
        //loop through interest rate field
        for (i = 0; i < 5; i++) {
            //save interest rate to loans
            loans[i].loan_int_rate = interestrate;
        }


        //update the form to apply the new values
        updateForm();

    }

}

let updateForm = () => {
    //initialize loanwithinterest
    loanWithInterest = 0;
    //initialize the totalLoan value
    let totalLoan = 0;
    //loop through entire field
    for (i = 1; i < 6; i++) {
        //change the value of the loan_year field based on values stored in loans
        $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
        //initialize loaned variable
        let loaned = loans[i - 1].loan_amount;
        //pull the loaned amount
        $(`#loan_amt0${i}`).val(loaned);
        //sum up total amount loaned
        totalLoan += parseFloat(loaned);
        //pull integer value
        $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);
        //calculate the total loaned value with interest
        loanWithInterest = (loanWithInterest + parseFloat(loaned)) * (1 + loans[0].loan_int_rate);
        //apply value of loanwithinterest
        $("#loan_bal0" + i).text(toMoney(loanWithInterest));
    }
    let totalamountowed = loanWithInterest - totalLoan;
    //apply value for total interest collected
    $(`#loan_int_accrued`).text(toMoney(totalamountowed));
}

//initialize app using angular inside the appdata field
var app = angular.module('appdata', []);
app.controller('alldata', function($scope) {
    //find the payments h2
    $scope.payments = [];
    //begin populate function
    $scope.populate = function() {
        //update what is visible
        updateForm();
        //initialize an endprice value using loanwithinterest
        let endprice = loanWithInterest;
        //initialize an interestrate value
        let interestrate = loans[0].loan_int_rate;
        //r value to represnt interest over months instead of years
        let r = interestrate / 12;
        //n value to disinclude a month
        let n = 11;
        //calculate payment
        let pay = 12 * (endprice / ((((1 + r) ** (n * 12)) - 1) / (r * (1 + r) ** (n * 12))));
        //loop 10 times
        for (let i = 0; i < 10; i++) {
            //decrease endprice
            endprice -= pay
            //initialize int to be equal to the montly interest rate * end price 
            let interested = endprice * (interestrate);
            //adjust payments values
            $scope.payments[i] = {
                //go to next year
                "year": loans[4].loan_year + i + 1,
                //apply what is payed
                "payed": toMoney(pay),
                //apply amount of interest
                "interestamount": toMoney(interested),
                //apply what the end price looks like
                "endbalance": toMoney(endprice += interested)
            }
        }
        //at position 10...
        $scope.payments[10] = {
            //year will equal the year of interest + 11
            "year": loans[4].loan_year + 11,
            //amount payed will equal the ending price
            "payed": toMoney(endprice),
            //interest should be zero
            "interestamount": toMoney(0),
            //balance of what is owed will be zero
            "endbalance": toMoney(0)
        }
    }
});
