let myarr = [2, 3,3,5,6,3,22,55,66];
var result =  myarr.reduce((prevValue, currentValue) => {
return prevValue + currentValue;
},0)
console.log(result);