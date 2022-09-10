# Error Fix Log

- Error 1
  Found in Console 
  Error Message : GET http://localhost:3000/withdraw.js net::ERR_ABORTED 404 (Not Found)   localhost/:53 

  Problem: withdraw.js was not linked to index.html properly
	index.html
    <script src="withdraw.js"></script>
  Fix: 
	index.html
    <script src="js/withdraw.js"></script>

- Error 2
  Found in Console
  Uncaught SyntaxError: Unexpected token ')' (at deposit.js:25:1)  deposit.js:25
  Problem: The function was not closed by ending braces
  );
  Fix:
  });

- Error 3
  Found in Console || After fixing Error 1 & 2 and Tried to deposite
  Requires Type check
  The id was not given to the right element as well
  Problem: Type wasn't converted before summation
	js/deposite.js
    const previousBalanceTotal = getextElementValueById("balance-total"); 

	index.html
	<h2 id="deposit-total" class="text-5xl font-medium">
	  $<span>00</span>
	</h2>

  Fix:
	js/deposit.js
    const previousBalanceTotal = getTextElementValueById("balance-total");

	index.html
	<h2 class="text-5xl font-medium">
	  $<span id="deposit-total">00</span>
	</h2>

- Error 4
	 Found in Console || After fixing Error 1 & 2 and Tried to deposite
	 The function name had a spelling mistake
	 Problem: 
	 deposite.js
	 const previousBalanceTotal = getextElementValueById("balance-total");
	 Fix:
	 deposite.js
	 const previousBalanceTotal = getTextElementValueById("balance-total");

- Error 5
  Unexpected Result in console
  due to number and string concatenation || Found After fixing error 3
