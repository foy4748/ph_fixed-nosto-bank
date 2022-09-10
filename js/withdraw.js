/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

//Error 8: Found in Console || After fixing Error 7
//Error 8: Uncaught TypeError: Cannot read properties of null (reading 'innerText')    utilities.js:11

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  /* Wrong
  const previousWithdrawTotal = getTextElementValueById("withdraw-total ");
  */

  const previousWithdrawTotal = getTextElementValueById("withdraw-total"); //Fixed
  //Error 10: Unexpected Result in UI
  //Error 10: due to number and string concatenation
  //Error 10: || Found After fixing Error 9
  /* Wrong
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  */
  const newWithdrawTotal =
    parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
  //Error 9: Instead of passing an ID, undefined variables were passed
  /* Wrong
  setTextElementValueById(withdraw - total, newWithdrawTotal);
  */
  setTextElementValueById("withdraw-total", newWithdrawTotal); //Fixed
  const previousBalanceTotal = getTextElementValueById("balance-total");
  //Error 11: Unexpected Result in UI
  //Error 11: due to number and string concatenation
  //Error 11: || Found After fixing Error 9
  /* Wrong
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  */

  const newBalanceTotal =
    parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount); //Fixed

  setTextElementValueById("balance-total", newBalanceTotal);
});
