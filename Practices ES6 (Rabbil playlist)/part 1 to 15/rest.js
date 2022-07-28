function cal (...num){
    let sum = 0 ;
    for(let i of num){
        sum= sum+i;
    }
    console.log(sum);
}
cal(1,2,3,4,5,6,7)