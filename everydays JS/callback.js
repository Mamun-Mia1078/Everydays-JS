const VarC = (callback ) =>{
    setTimeout(function(){
        console.log('A function that takes some time');
        callback();
    },3000)
}
const printSomethingC = () => {
    console.log('another function ');
}
VarC(printSomethingC);