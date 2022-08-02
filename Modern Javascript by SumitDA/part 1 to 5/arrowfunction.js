// let number = () =>  10; // for return one statement

// console.log(number());




//* for double statement
// let number = (a,b) => {
//     return a+b;
// }
// console.log(number(5,10)); // bracket mendatory for 2statement

//* for this keyword 

var javascript = {
    name: 'javascript',
    librais: ['React', 'Angular', 'Vue'],
    printLib: function() {
        this.librais.forEach((a) =>  console.log(`${this.name} loves ${a}`));
        
    }
};
javascript.printLib();