  # Error Fix Log  
  
### Error 1  
  Found in Console    
  Error Message : GET http://localhost:3000/withdraw.js net::ERR_ABORTED 404 (Not Found)   localhost/:53   
  
  Problem: withdraw.js was not linked to index.html properly    
  	index.html  
  `<script src="withdraw.js"></script>`  
  
  Fix:   
  	index.html  
  `<script src="js/withdraw.js"></script>`  
  
### Error 2  
  Found in Console  
  Uncaught SyntaxError: Unexpected token ')' (at deposit.js:25:1)  deposit.js:25  
  
  Problem: The function was not closed by ending braces  
  `);`  
  
  Fix:  
  `});`  
  
### Error 3  
  Found in Console || After fixing Error 1 & 2 and Tried to deposite  
  Requires Type check  
  The id was not given to the right element as well  
  
  Problem: Type wasn't converted before summation  
  js/deposite.js  
  `const previousBalanceTotal = getextElementValueById("balance-total");`   
  
  index.html  
  `<h2 id="deposit-total" class="text-5xl font-medium">  $<span>00</span>  </h2>`  
  	 
  Fix:  
  js/deposit.js  
  `const previousBalanceTotal = getTextElementValueById("balance-total");`  
  
  index.html  
  `<h2 class="text-5xl font-medium">  $<span id="deposit-total">00</span>  </h2>`  
  
### Error 4  
  Found in Console || After fixing Error 1 & 2 and Tried to deposite  
  
  Problem: The function name had a spelling mistake  
  deposite.js  
  `const previousBalanceTotal = getextElementValueById("balance-total");`  
  
  Fix:  
  deposite.js  
  `const previousBalanceTotal = getTextElementValueById("balance-total");`  
  
### Error 5  
  Unexpected Result in console  
  due to number and string concatenation || Found After fixing error 3  
  
### Error 6  
  Updated value is not showing in UI || Found After Fixing Error 5  
  Because it was accessing element via value instead of textContent  
  
  Problem:  
  js/utilities.js  
  `textElement.value = newValue;`  
  
  Fix:  
  js/utilities.js  
  `textElement.textContent = newValue;`  
  
### Error 7  
  Unexpected Result in UI
  due to number and string concatenation
  Found After fixing Error 6
  
  Problem: Type wasn't converted before summation  
  js/deposit.js  
  `const newBalanceTotal = previousBalanceTotal + newDepositAmount;`  
  
  Fix:
  js/deposit.js  
  `const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);`  
  
### Error 8  
  Found in Console || After fixing Error 7
  Uncaught TypeError: Cannot read properties of null (reading 'innerText')    utilities.js:11
  
  Problem: The id wasn't right. It has a space at the end  
  js/withdraw.js
  `const previousWithdrawTotal = getTextElementValueById("withdraw-total ");`  
  
  Fix:  
  js/withdraw.js   
  `const previousWithdrawTotal = getTextElementValueById("withdraw-total");`  
  
### Error 9  
  Problem: Instead of passing an ID, undefined variables were passed  
  js/withdraw.js
  `setTextElementValueById(withdraw - total, newWithdrawTotal);`  
  
  Fix:  
  js/withdraw.js
  `setTextElementValueById("withdraw-total", newWithdrawTotal);`  
  
### Error 10  
  Unexpected Result in UI  
  due to number and string concatenation  
  || Found After fixing Error 9  
  
  Problem: Type wasn't converted before summation  
  js/withdraw.js  
  `const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;`  
  
  Fix:  
  js/withdraw.js
  `const newWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);`  
### Error 11  
  Unexpected Result in UI  
  due to number and string concatenation  
  || Found After fixing Error 9  
  
  Problem: Type wasn't converted before summation  
  js/withdraw.js
  `const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;`  
  
  Fixed:  
  js/withdraw.js
  `const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);`  
  
### Error 12  
  
  Problem: Negetive Balanace issue.   

  Fix:  
  js/withdraw.js
  `if(newBalanceTotal < 0) { alert("Insufficient Balance"); return; }`  

### Error 13

  Problem: Clearing Input field after returing  
  js/utilities.js  
  `return inputFieldValue; inputField.value = "";`  

  Fix:   
  js/utilities.js  
  `inputField.value = ""; return inputFieldValue;`  
