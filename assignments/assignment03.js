// create an "add1" function
// takes in the current hole/row and the total to be updated
function add1 (elem, elemTotal) {
  if(elem.children[2].innerHTML == "-" || elem.children[2].innerHTML == "0") {
    elem.children[2].innerHTML = "1";
    //update the total score on the scorecard 
    scoreTotal = scoreTotal + 1;
    elemTotal.children[2].innerHTML =scoreTotal; }
  if(elem.children[2].innerHTML == "-" || elem.children[2].innerHTML == "0") { //checks if the hole's value is "-" or "0"
    elem.children[2].innerHTML = "1"; //if so, the score for the hole on the scorecard is set to 1
    scoreTotal = scoreTotal + 1; //updates the total score using the scoreTotal variable declared above 
    elemTotal.children[2].innerHTML =scoreTotal; } //updates the total on the scorecard 
  else {
    let score = elem.children[2].innerHTML;
    let score = elem.children[2].innerHTML; //declares a local variable "score" to hold the number value of the score column for that hole
    score = Number.parseInt(score);
    elem.children[2].innerHTML = score + 1;
    //update the total on the scorecard
    scoreTotal = scoreTotal + 1;
    elemTotal.children[2].innerHTML =scoreTotal; }

  let over = elem.children[2].innerHTML;
    elem.children[2].innerHTML = score + 1; //updates the scorecard value for the hole to be the score +1 (it's plus 1 since the add button was pressed)
    scoreTotal = scoreTotal + 1; //updates the total score using the scoreTotal variable declared above
    elemTotal.children[2].innerHTML =scoreTotal; }//updates the total on the scorecard
  //the next if statement accounts for the over column which keeps track of how much the score has gotten over par
  let over = elem.children[2].innerHTML; //declares a local variable "over" to hold the number value of the score column for that hole (this will be used/changed later)
  over = Number.parseInt(over);
  if (over > 4) {
    overTotal = overTotal + 1;
    over = over - 4;
    elem.children[3].innerHTML = over;
    elemTotal.children[3].innerHTML =overTotal; }
  if (over > 4) { //using the int variable over (which is the current score value of the hole), checks if the score is over par (4) 
    overTotal = overTotal + 1; //adds one to the over total if the score is over par 
    over = over - 4; //subtract 4 (the over amount is the difference between the score and par so you subtract par which is 4)
    elem.children[3].innerHTML = over; //updates the scorecard over value for that hole 
    elemTotal.children[3].innerHTML =overTotal; } //updates the over total on the scorecard
}

//the sub function subtracts one from the score and updates the over value as well as the totals accordingly 
function sub1 (elem, elemTotal) {
  if (elem.children[2].innerHTML != "0" && elem.children[2].innerHTML != "-"){
    let score = elem.children[2].innerHTML;
  if (elem.children[2].innerHTML != "0" && elem.children[2].innerHTML != "-"){ //checks if the score isn't 0 or - 
    let score = elem.children[2].innerHTML; //declares a local variable "score" to hold the number value of the score column for that hole
    score = Number.parseInt(score);
    elem.children[2].innerHTML = score - 1;
    scoreTotal = scoreTotal - 1;
    elemTotal.children[2].innerHTML = scoreTotal;
    elem.children[2].innerHTML = score - 1; //subtracts one from the current scorecard value for that hole 
    scoreTotal = scoreTotal - 1; //subtracts one from the scoreTotal 
    elemTotal.children[2].innerHTML = scoreTotal; //the current scoreTotal is applied to the scorecard in the totals row 
  }
  let over = elem.children[2].innerHTML;
  //updates the over values 
  let over = elem.children[2].innerHTML; //declares a local variable "over" to hold the number value of the score column for that hole (this will be used/changed later)
  over = Number.parseInt(over);
  //(elem.children[2].innerHTML > 4)
  if (over >=4){
    //let over = elem.children[2].innerHTML;
    //over = Number.parseInt(over);
    overTotal = overTotal - 1;
    over = over - 4;
    elem.children[3].innerHTML = over;
    elemTotal.children[3].innerHTML =overTotal;
  if (over >=4){ //over represents the score currently so this checks if the score is over par (4)
    overTotal = overTotal - 1; //subtracts one from the over total 
    over = over - 4;//subtract 4 (the over amount is the difference between the score and par so you subtract par which is 4)
    elem.children[3].innerHTML = over; //updates the scorecard over value for that hole 
    elemTotal.children[3].innerHTML =overTotal;//updates the over total on the scorecard
  }
}

//the clear functions clears a row/hole and updates the totals accordingly 
function clear (elem, elemTotal){ 
  let score = elem.children[2].innerHTML;
  let over = elem.children[3].innerHTML;
  if (score != "-") {
  let score = elem.children[2].innerHTML; //declares a local variable "score" to hold the number value of the score column for that hole
  let over = elem.children[3].innerHTML; //declares a local variable "over" to hold the number value of the over column for that hole
  if (score != "-") {  //checks if the score isn't equal to "-" i.e if the score has a number value 
    score = Number.parseInt(score);
    elemTotal.children[2].innerHTML = scoreTotal - score;
    scoreTotal = scoreTotal - score;
    elemTotal.children[2].innerHTML = scoreTotal - score; //subtracts the score you're clearing from the total on the scorecard
    scoreTotal = scoreTotal - score; //subtracts the score you're clearing from the scoreTotal variable which is holding the total 
  }
  if (over != "-") {
  //clears the over values 
  if (over != "-") { //checks if the score isn't equal to "-" i.e if the score has a number value 
    over = Number.parseInt(over);
    elemTotal.children[3].innerHTML = overTotal - over;
    overTotal = overTotal - over;
    elemTotal.children[3].innerHTML = overTotal - over; //subtracts the oover score you're clearing from the over total on the scorecard
    overTotal = overTotal - over;  //subtracts the over total you're clearing from the overTotal variable which is holding the total over amount
  }

  //lastly updates the score and over columns for the hole and resets them to "-"
  elem.children[2].innerHTML = "-";
  elem.children[3].innerHTML = "-";
}
