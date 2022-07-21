function getVar() {
    var x;
    setTimeout(function(){
        x=12;
    },300)
return x;
}
var value = getVar();
console.log('The value is: ' + value); // js cant wait because of that reason output is undifined
