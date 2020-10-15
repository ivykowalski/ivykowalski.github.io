let elem = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1] = document.getElementById("1");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[1].children[4].children[1].onclick 
  = function(){sub1(elem[1], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[1].children[4].children[2].onclick 
  = function(){clear(elem[1], elem[19]);};

elem[2] = document.getElementById("2");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[2].children[4].children[1].onclick 
  = function(){sub1(elem[2], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[2].children[4].children[2].onclick 
  = function(){clear(elem[2], elem[19]);};

elem[3] = document.getElementById("3");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[3].children[4].children[1].onclick 
  = function(){sub1(elem[3], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[3].children[4].children[2].onclick 
  = function(){clear(elem[3], elem[19]);};

elem[4] = document.getElementById("4");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[4].children[4].children[1].onclick 
  = function(){sub1(elem[4], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[4].children[4].children[2].onclick 
  = function(){clear(elem[4], elem[19]);};

elem[5] = document.getElementById("5");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[5].children[4].children[1].onclick 
  = function(){sub1(elem[5], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[5].children[4].children[2].onclick 
  = function(){clear(elem[5], elem[19]);};

elem[6] = document.getElementById("6");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[6].children[4].children[1].onclick 
  = function(){sub1(elem[6], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[6].children[4].children[2].onclick 
  = function(){clear(elem[6], elem[19]);};

elem[7] = document.getElementById("7");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[7].children[4].children[1].onclick 
  = function(){sub1(elem[7], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[7].children[4].children[2].onclick 
  = function(){clear(elem[7], elem[19]);};

elem[8] = document.getElementById("8");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[8].children[4].children[1].onclick 
  = function(){sub1(elem[8], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[8].children[4].children[2].onclick 
  = function(){clear(elem[8], elem[19]);};

elem[9] = document.getElementById("9");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[9].children[4].children[0].onclick 
  = function(){add1(elem[9], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[9].children[4].children[1].onclick 
  = function(){sub1(elem[9], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[9].children[4].children[2].onclick 
  = function(){clear(elem[9], elem[19]);};

elem[10] = document.getElementById("10");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[10].children[4].children[0].onclick 
  = function(){add1(elem[10], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[10].children[4].children[1].onclick 
  = function(){sub1(elem[10], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[10].children[4].children[2].onclick 
  = function(){clear(elem[10], elem[19]);};

elem[11] = document.getElementById("11");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[11].children[4].children[1].onclick 
  = function(){sub1(elem[11], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[11].children[4].children[2].onclick 
  = function(){clear(elem[11], elem[19]);};

elem[12] = document.getElementById("12");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[12].children[4].children[1].onclick 
  = function(){sub1(elem[12], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[12].children[4].children[2].onclick 
  = function(){clear(elem[12], elem[19]);};

elem[13] = document.getElementById("13");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[13].children[4].children[0].onclick 
  = function(){add1(elem[13], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[13].children[4].children[1].onclick 
  = function(){sub1(elem[13], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[13].children[4].children[2].onclick 
  = function(){clear(elem[13], elem[19]);};

elem[14] = document.getElementById("14");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[14].children[4].children[1].onclick 
  = function(){sub1(elem[14], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[14].children[4].children[2].onclick 
  = function(){clear(elem[14], elem[19]);};

elem[15] = document.getElementById("15");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[15].children[4].children[1].onclick 
  = function(){sub1(elem[15], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[15].children[4].children[2].onclick 
  = function(){clear(elem[15], elem[19]);};

elem[16] = document.getElementById("16");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[16].children[4].children[1].onclick 
  = function(){sub1(elem[16], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[16].children[4].children[2].onclick 
  = function(){clear(elem[16], elem[19]);};

elem[17] = document.getElementById("17");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[17].children[4].children[1].onclick 
  = function(){sub1(elem[17], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[17].children[4].children[2].onclick 
  = function(){clear(elem[17], elem[19]);};

elem[18] = document.getElementById("18");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//I added elem[19] as a parameter for the add1 function so the total can be updated as well
elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18], elem[19]);};
//when the minus button is clicked (children[1]) the sub1 function (which subtracts 1) is called and passed the current hole's value as well as the total (elem[19]) so it can be updated
elem[18].children[4].children[1].onclick 
  = function(){sub1(elem[18], elem[19]);};
//when the C button is clicked (children[2]) the clear function is called which clears the current row/hole and updates the value for that hole and the total 
elem[18].children[4].children[2].onclick 
  = function(){clear(elem[18], elem[19]);};

elem[19] = document.getElementById("totals");
//declares variables used by the 19 id/19th row which is the "totals" row
//The par total remains constant but the totals for the score and the amount over par can change
const parTotal = 72;
let scoreTotal = 0;
let overTotal = 0;
//sets the par total in the scorecard to parTotal which is 72 
elem[19].children[1].innerHTML = parTotal;


// create an "add1" function
// takes in the current hole/row and the total to be updated
function add1 (elem, elemTotal) {
  if(elem.children[2].innerHTML == "-" || elem.children[2].innerHTML == "0") { //checks if the hole's value is "-" or "0"
    elem.children[2].innerHTML = "1"; //if so, the score for the hole on the scorecard is set to 1
    scoreTotal = scoreTotal + 1; //updates the total score using the scoreTotal variable declared above 
    elemTotal.children[2].innerHTML =scoreTotal; } //updates the total on the scorecard 
  else {
    let score = elem.children[2].innerHTML; //declares a local variable "score" to hold the number value of the score column for that hole
    score = Number.parseInt(score);
    elem.children[2].innerHTML = score + 1; //updates the scorecard value for the hole to be the score +1 (it's plus 1 since the add button was pressed)
    scoreTotal = scoreTotal + 1; //updates the total score using the scoreTotal variable declared above
    elemTotal.children[2].innerHTML =scoreTotal; }//updates the total on the scorecard
  //the next if statement accounts for the over column which keeps track of how much the score has gotten over par
  let over = elem.children[2].innerHTML; //declares a local variable "over" to hold the number value of the score column for that hole (this will be used/changed later)
  over = Number.parseInt(over);
  if (over > 4) { //using the int variable over (which is the current score value of the hole), checks if the score is over par (4) 
    overTotal = overTotal + 1; //adds one to the over total if the score is over par 
    over = over - 4; //subtract 4 (the over amount is the difference between the score and par so you subtract par which is 4)
    elem.children[3].innerHTML = over; //updates the scorecard over value for that hole 
    elemTotal.children[3].innerHTML =overTotal; } //updates the over total on the scorecard
}
//the sub function subtracts one from the score and updates the over value as well as the totals accordingly 
function sub1 (elem, elemTotal) {
  if (elem.children[2].innerHTML != "0" && elem.children[2].innerHTML != "-"){ //checks if the score isn't 0 or - 
    let score = elem.children[2].innerHTML; //declares a local variable "score" to hold the number value of the score column for that hole
    score = Number.parseInt(score);
    elem.children[2].innerHTML = score - 1; //subtracts one from the current scorecard value for that hole 
    scoreTotal = scoreTotal - 1; //subtracts one from the scoreTotal 
    elemTotal.children[2].innerHTML = scoreTotal; //the current scoreTotal is applied to the scorecard in the totals row 
  }
  //updates the over values 
  let over = elem.children[2].innerHTML; //declares a local variable "over" to hold the number value of the score column for that hole (this will be used/changed later)
  over = Number.parseInt(over);
  if (over >=4){ //over represents the score currently so this checks if the score is over par (4)
    overTotal = overTotal - 1; //subtracts one from the over total 
    over = over - 4;//subtract 4 (the over amount is the difference between the score and par so you subtract par which is 4)
    elem.children[3].innerHTML = over; //updates the scorecard over value for that hole 
    elemTotal.children[3].innerHTML =overTotal;//updates the over total on the scorecard
  }
}
//the clear functions clears a row/hole and updates the totals accordingly 
function clear (elem, elemTotal){ 
  let score = elem.children[2].innerHTML; //declares a local variable "score" to hold the number value of the score column for that hole
  let over = elem.children[3].innerHTML; //declares a local variable "over" to hold the number value of the over column for that hole
  if (score != "-") {  //checks if the score isn't equal to "-" i.e if the score has a number value 
    score = Number.parseInt(score);
    elemTotal.children[2].innerHTML = scoreTotal - score; //subtracts the score you're clearing from the total on the scorecard
    scoreTotal = scoreTotal - score; //subtracts the score you're clearing from the scoreTotal variable which is holding the total 
  }
  //clears the over values 
  if (over != "-") { //checks if the score isn't equal to "-" i.e if the score has a number value 
    over = Number.parseInt(over);
    elemTotal.children[3].innerHTML = overTotal - over; //subtracts the oover score you're clearing from the over total on the scorecard
    overTotal = overTotal - over;  //subtracts the over total you're clearing from the overTotal variable which is holding the total over amount
  }
  //lastly updates the score and over columns for the hole and resets them to "-"
  elem.children[2].innerHTML = "-";
  elem.children[3].innerHTML = "-";
}
