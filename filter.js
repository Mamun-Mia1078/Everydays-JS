var number = [1,2,3,4,5,6,7,8,9];
var newNumber = number.filter(function(items){
    return items % 2 == 0
})
console.log(newNumber);