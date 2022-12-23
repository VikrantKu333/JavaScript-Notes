// Throw, and Try...Catch...Finally
// -> The try statement defines a code block to run (to try).
// -> The catch statement defines a code block to handle any error.
// -> The finally statement defines a code block to run regardless of the result.
// -> The throw statement defines a custom error.

//Try, Catch, Finally
try {
    console.log('This is try code block');
    nonExistentFunction();
} catch (err) {
    console.log('This is catch code block');
    console.error(err);
    console.error(err.name);
    console.error(err.message);
} finally {
    console.log('This is finally code block');
}

//Throw
/*
throw 'Error Text';             // generates an exception with a string value
throw 42;                       // generates an exception with the number value
throw true;                     // generates an exception with the boolean value
throw new Error('Required');    // generates an error object with the message of Required
*/