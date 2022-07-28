// function myFun(){
//     var name = "ECMAScript6"; // this is local
//     console.log(name);
// }
// myFun();

var name = "ECMAScript6"; // this is global it's work on local and global both
function myFun(){
   
    console.log(name); 
}

myFun();
