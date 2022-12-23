/*
JavaScript Assignment Operators - - - 
Operator	Example	    Same As
=	        x = y	    x = y
+=	        x += y	    x = x + y
-=	        x -= y	    x = x - y
*=	        x *= y	    x = x * y
/=	        x /= y	    x = x / y
%=	        x %= y	    x = x % y
**=	        x **= y	    x = x ** y
*/

console.log(" - - - - - - - - - - JavaScript Assignment Operators - - - - - - - - - - ");
var firstNumber = 45;
var secondNumber = 69;
console.log("First Number : ", firstNumber, "Second Number : ", secondNumber);

/*
JavaScript Arithmetic Operators - - -
Operator	Description
+	        Addition
-	        Subtraction
*	        Multiplication
**	        Exponentiation
/	        Division
%	        Modulus (Division Remainder)
++	        Increment
--	        Decrement
*/

console.log(" - - - - - - - - - - JavaScript Arithmetic Operators - - - - - - - - - - ");
console.log("Addition : ", firstNumber + secondNumber);
console.log("Subtraction : ", firstNumber - secondNumber);

/*
JavaScript Comparison Operators - - - 
Operator	Description
==	        equal to
===	        equal value and equal type
!=	        not equal
!==	        not equal value or not equal type
>	        greater than
<	        less than
>=	        greater than or equal to
<=	        less than or equal to
?	        ternary operator
*/

console.log(" - - - - - - - - - - JavaScript Comparison Operators - - - - - - - - - - ");
console.log(firstNumber == secondNumber);
console.log(firstNumber >= secondNumber);
console.log(firstNumber <= secondNumber);

/*
JavaScript Logical Operators - - - 
Operator	Description
&&	        logical and
||	        logical or
!	        logical not
*/

console.log(" - - - - - - - - - - JavaScript Logical Operators - - - - - - - - - - ");

// Logical and
console.log(" - - - - - - - - - - Logical and - - - - - - - - - - ");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Logical or
console.log(" - - - - - - - - - - Logical or - - - - - - - - - - ");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical not
console.log(" - - - - - - - - - - Logical not - - - - - - - - - - ");
console.log(!true);
console.log(!false);