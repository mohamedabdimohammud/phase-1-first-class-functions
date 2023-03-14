function receivesAFunction(callback) {
    // take a callback function as an argument
    // call the callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // take no arguments
    function namedFunction() {
      // return a named function
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    // take no arguments
    return function() {
      // return an anonymous function
    };
  }
  
  // create the nyan cat element
  const nyanCat = document.createElement('pre');
  nyanCat.textContent = ` 0   -_-__,------,
   3   -_-__|  /\\_/\\ 
   0   -_-_~|_( x .x) 
       -_-_ ""  "" `;
  
  // append the nyan cat to the body of the document
  document.body.appendChild(nyanCat);
  
  // call receivesAFunction with an anonymous function
  receivesAFunction(function() {
    console.log('Hello, World!');
  });
  
  // call returnsANamedFunction and store the returned function in a variable
  const namedFunc = returnsANamedFunction();
  console.log(namedFunc);
  
  // call returnsAnAnonymousFunction and store the returned function in a variable
  const anonFunc = returnsAnAnonymousFunction();
  console.log(anonFunc);
  