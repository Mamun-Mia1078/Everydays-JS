var num = [ 1,3,4,5,6,7,7,];
 var res = num.filter((current,index, arr) => {
    return current > 4 ;
});
console.log(res);
// return filtered new array 
