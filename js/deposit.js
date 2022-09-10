// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /* 
    1. get previous deposit total by id

    */

  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  // Error 5: Unexpected Result in console
  // Error 5: due to number and string concatenation || Found After fixing error 3
  /* Wrong
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  */
  const newDepositTotal =
    parseFloat(previousDepositTotal) + parseFloat(newDepositAmount); //Fixed

  //Error 3: Found in Console || After fixing Error 1 & 2 and Tried to deposite
  //Error 3: NaN undefined 23
  //Error 3: Requires Type check
  //Error 3:    NaN                  undefined         number
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);

  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function

  //Error 4: Found in Console || After fixing Error 1 & 2 and Tried to deposite
  /* Wrong
  const previousBalanceTotal = getextElementValueById("balance-total");
  */
  const previousBalanceTotal = getTextElementValueById("balance-total"); //Fixed

  //Error 7: Unexpected Result in UI
  //Error 7: due to number and string concatenation
  //Error 7: || Found After fixing Error 6

  /* Wrong
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  */
  const newBalanceTotal =
    parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount); //Fixed

  setTextElementValueById("balance-total", newBalanceTotal);

  //Error 2: Found in Console
  //Error 2: Uncaught SyntaxError: Unexpected token ')' (at deposit.js:25:1)  deposit.js:25

  /* Wrong
	);
	*/
}); //Fixed
