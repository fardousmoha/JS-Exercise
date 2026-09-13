// blocking or synchronous code
function blockingCode() {
 alert("fetching data from server");
 return "I am blocking code!";
}


console.log("starting to do other things");
console.log(blockingCode());
console.log("this message will be printed after the blocking code is executed");

 



//non-blocking or asynchronous code
function nonBlockingCode() {
  setTimeout(() => {
    console.log("fetching data from server");
  }, 1000);
}

console.log("starting to do other things");
nonBlockingCode();
console.log("this message will be printed immediately after calling the non-blocking function");