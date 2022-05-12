var number = [1,2,3,4,5,6,7,8,9];
var total = number.reduce(function(sum,items){
    return sum += items;
},0);
console.log(total);